import { createStackNavigator, createAppContainer } from 'react-navigation'
import ParkeringsAlternativScreen from '../screens/ParkeringsAlternativScreen';

import HyrUtScreen from '../screens/HyrUtScreen';
import SlotScreen from '../screens/Slot';
import CalcScreen from '../screens/Calc';


import Layout from '../constants/Layout.js'
import HeaderComponentParkeringsAlternativ from '../components/HeaderComponentParkeringsAlternativ';


const HyrUt = createStackNavigator(
  {
    HyrUt: { screen: ParkeringsAlternativScreen,

      navigationOptions: {
        tabBarLabel: 'All',
        header: <HeaderComponentParkeringsAlternativ/>,
      },


    },
    Calc: { screen: CalcScreen,
      navigationOptions: {
        tabBarLabel: 'All',
        header: <HeaderComponentParkeringsAlternativ/>,
      },

     },
    Slot: { screen: SlotScreen,

      navigationOptions: {
        tabBarLabel: 'All',
        header: <HeaderComponentParkeringsAlternativ/>,
      },
     }
  },
)

const HyrUtApp = createAppContainer(HyrUt)

export default HyrUtApp
