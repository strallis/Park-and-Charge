import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BedrifterScreen from '../screens/BedrifterScreen';
import WaitingScreen from '../screens/WaitingScreen';




import BedrifterComponent from '../components/BedrifterComponent';
import HyrUtComponent from '../components/HyrUtComponent';
import ParkeraComponent from '../components/ParkeraComponent';
import ProfilComponent from '../components/ProfilComponent';




const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: WaitingScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <BedrifterComponent
      focused={focused} />
  ),
};

HomeStack.path = '';





const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <HyrUtComponent
      focused={focused} />
  ),
};

LinksStack.path = '';






const ProfilStack = createStackNavigator(
  {
    Links: LinksScreen,
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






const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <ParkeraComponent
      focused={focused} />
  ),
};

SettingsStack.path = '';

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
  LinksStack,
  SettingsStack,
  ProfilStack,

},
bottomNavigatorConfigs

);

tabNavigator.path = '';

export default tabNavigator;
