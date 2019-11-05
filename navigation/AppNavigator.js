import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WaitingScreen from '../screens/WaitingScreen';




const AppNavigator = createSwitchNavigator({
  //App: App,
  Main: MainTabNavigator,
  Waiting: WaitingScreen,

}, {
  initialRouteName: 'Waiting'
});

export default createAppContainer(AppNavigator);
