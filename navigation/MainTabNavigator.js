import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BedrifterScreen from '../screens/BedrifterScreen';
import WaitingScreen from '../screens/WaitingScreen';
import ProfilScreen from '../screens/ProfilScreen';
import ParkScreen from '../screens/ParkScreen';
import HyrUtScreen from '../screens/HyrUtScreen';
import ParkeringsAlternativScreen from '../screens/ParkeringsAlternativScreen';

import BedrifterComponent from '../components/BedrifterComponent';
import HyrUtComponent from '../components/HyrUtComponent';
import ParkeraComponent from '../components/ParkeraComponent';
import ProfilComponent from '../components/ProfilComponent';



import HeaderComponentParkeringsAlternativ from '../components/HeaderComponentParkeringsAlternativ';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: {screen: ParkScreen},// ParkScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <ParkeraComponent
      focused={focused} />
  ),
};

HomeStack.path = '';





const HyrUtStack = createStackNavigator(

  {
    Uthyrningar: {screen: HyrUtScreen},// ParkScreen
    ParkeringsAlternativ: {screen: ParkeringsAlternativScreen,
      navigationOptions: {
              headerLeft: null,
              headerTitle:<HeaderComponentParkeringsAlternativ/>,
          },
        },// ParkScreen
  },
  config
);

HyrUtStack.navigationOptions = {
  tabBarLabel: ' ',
  //tabBarVisible = false,
  tabBarIcon: ({ focused }) => (
    <HyrUtComponent
      focused={focused} />
  ),
};


HyrUtStack.path = '';






const ProfilStack = createStackNavigator(
  {
    Links: ProfilScreen,
  },
  config
);

ProfilStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <ProfilComponent
      focused={focused} />
  ),
};

ProfilStack.path = '';






const BedrifterStack = createStackNavigator(
  {
    Settings: BedrifterScreen,
  },
  config
);

BedrifterStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <BedrifterComponent
      focused={focused} />
  ),
};

BedrifterStack.path = '';

bottomNavigatorConfigs = {
   initialRouteName: "HomeStack",
   tabBarOptions: {
       style:{  width: 375,
                height: 112,
                shadowOffset: {
                  height: -2
                },
                shadowColor: "#111",
                shadowOpacity: 0.2,
                shadowRadius: 1.2
              }
   },
};

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  HyrUtStack,
  BedrifterStack,
  ProfilStack,

},
bottomNavigatorConfigs

);

tabNavigator.path = '';

export default tabNavigator;
