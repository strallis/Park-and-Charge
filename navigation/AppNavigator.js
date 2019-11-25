import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WaitingScreen from '../screens/WaitingScreen';
import LoginScreen from '../screens/LoginScreen';
import ParkHeaderComponent from '../components/ParkHeaderComponent';
import Layout from '../constants/Layout.js'
import LoginNavigator from './LoginNavigator.js'

const AppNavigator = createSwitchNavigator({
  //App: App,
  Main: MainTabNavigator,
  Login:  LoginNavigator,

}, {
  initialRouteName: 'Login'
});




export default createAppContainer(AppNavigator);
