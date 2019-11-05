import { createStackNavigator, createAppContainer } from 'react-navigation'
import ParkeringsAlternativScreen from '../screens/ParkeringsAlternativScreen';
import HyrUtScreen from '../screens/HyrUtScreen';
import Layout from '../constants/Layout.js'
import HeaderComponentParkeringsAlternativ from '../components/HeaderComponentParkeringsAlternativ';


const HyrUt = createStackNavigator(
  {
    HyrUt: { screen: ParkeringsAlternativScreen,

      navigationOptions: {
        tabBarLabel: 'All',
        header: <HeaderComponentParkeringsAlternativ/>,
      }


    },
  },
)

const HyrUtApp = createAppContainer(HyrUt)

export default HyrUtApp



// static navigationOptions = {
//   // headerTitle instead of title
//   headerTitle: () => <HeaderComponentParkeringsAlternativ />,
// };


// static navigationOptions = {
//   // headerTitle instead of title
//   headerTitle: () => <HeaderComponentParkeringsAlternativ />,
// };
