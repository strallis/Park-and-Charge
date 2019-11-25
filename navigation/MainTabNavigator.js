import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';


import BedrifterScreen from '../screens/BedrifterScreen';
import WaitingScreen from '../screens/WaitingScreen';
import ProfilScreen from '../screens/ProfilScreen';
import ParkScreen from '../screens/ParkScreen';
import LoginScreen from '../screens/LoginScreen';
import HyrUtScreen from '../screens/HyrUtScreen';
import ParkeringsAlternativScreen from '../screens/ParkeringsAlternativScreen';


import SlotScreen from '../screens/Slot';
import CalcScreen from '../screens/Calc';


import BedrifterComponent from '../components/BedrifterComponent';
import HyrUtComponent from '../components/HyrUtComponent';
import ParkeraComponent from '../components/ParkeraComponent';
import ProfilComponent from '../components/ProfilComponent';
import ParkHeaderComponent from '../components/ParkHeaderComponent';



import HeaderComponentParkeringsAlternativ from '../components/HeaderComponentParkeringsAlternativ';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Login: {screen: LoginScreen},// ParkScreen
    Parkera: {screen: ParkScreen,
      navigationOptions: {
              headerLeft: null,
              headerTitle:<ParkHeaderComponent/>,
          },
    },// ParkScreen
  },
  config
);

// HomeStack.navigationOptions = {
//   tabBarLabel: ' ',
//   tabBarVisible: false,
//   tabBarIcon: ({ focused }) => (
//     <ParkeraComponent
//       focused={focused} />
//   ),
// };


HomeStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};


  if (routeName === 'Login') {
    navigationOptions.tabBarVisible = false
  }else{
    navigationOptions.tabBarVisible = true
  }

  navigationOptions.tabBarLabel = ' '
  navigationOptions.tabBarIcon = ({ focused }) => (
    <ParkeraComponent
      focused={focused} />
  )

  return navigationOptions;
};

HomeStack.path = '';







const HyrUtStack = createStackNavigator(

  {
    Uthyrningar: {screen: HyrUtScreen},
    ParkeringsAlternativ: {screen: ParkeringsAlternativScreen,
      navigationOptions: {
              headerLeft: null,
              headerTitle:<HeaderComponentParkeringsAlternativ/>,
          },
        },
    Slots: {screen: SlotScreen,
      navigationOptions: {
              headerLeft: null,
              headerTitle:<HeaderComponentParkeringsAlternativ/>,
          },
        },
    Calc: {screen: CalcScreen,
      navigationOptions: {
              headerLeft: null,
              headerTitle:<HeaderComponentParkeringsAlternativ/>,
          },
        },
  },
  config
);

HyrUtStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <HyrUtComponent
      focused={focused} />
  ),
};


HyrUtStack.path = '';






const ProfilStack = createStackNavigator(
  {
    Profil: ProfilScreen,
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
    Bedrifter: BedrifterScreen,
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
