/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Setting a timer']);

import AppContainer from './src/MainNav';

const App = () => {
  return <AppContainer/> 
};

export default App;
