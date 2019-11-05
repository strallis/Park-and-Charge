import { createStackNavigator, createAppContainer } from 'react-navigation'
import ParkScreen from '../screens/ParkScreen';
import Layout from '../constants/Layout.js'



const LoginNavigation = createStackNavigator(
  {
    Parkera: { screen: ParkScreen,
    },
  },
)

const LoginApp = createAppContainer(LoginNavigation)

export default LoginApp
