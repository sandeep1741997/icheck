/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Routes from './src/routes/routes';

function App() {
  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;


// {
//   "name": "icheck",
//   "version": "0.0.1",
//   "private": true,
//   "scripts": {
//     "android": "react-native run-android",
//     "ios": "react-native run-ios",
//     "start": "react-native start",
//     "test": "jest",
//     "lint": "eslint ."
//   },
//   "dependencies": {
//     "@react-native-async-storage/async-storage": "^1.15.17",
//     "@react-native-community/art": "^1.2.0",
//     "@react-native-community/cli": "^10.1.0",
//     "@react-native-community/cli-platform-android": "^10.1.0",
//     "@react-navigation/bottom-tabs": "^6.2.0",
//     "@react-navigation/native": "^6.0.8",
//     "@react-navigation/native-stack": "^6.4.0",
//     "expo": "^1.0.0",
//     "moment": "^2.29.1",
//     "react": "17.0.2",
//     "react-native": "^0.70.6",
//     "react-native-eject": "^0.2.0",
//     "react-native-gradle-plugin": "^0.71.12",
//     "react-native-pie": "^1.1.2",
//     "react-native-safe-area-context": "^3.3.2",
//     "react-native-screens": "^3.10.2",
//     "react-native-select-dropdown": "^1.7.0",
//     "yet": "^0.1.0"
//   },
//   "devDependencies": {
//     "@babel/core": "^7.12.9",
//     "@babel/runtime": "^7.12.5",
//     "@react-native-community/eslint-config": "^2.0.0",
//     "babel-jest": "^26.6.3",
//     "eslint": "7.14.0",
//     "jest": "^26.6.3",
//     "metro-react-native-babel-preset": "^0.66.2",
//     "react-test-renderer": "17.0.2"
//   },
//   "jest": {
//     "preset": "react-native"
//   }
// }

