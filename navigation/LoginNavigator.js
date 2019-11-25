import { createStackNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen.js'
import WaitingScreen from '../screens/WaitingScreen.js'



import Layout from '../constants/Layout.js'

const Login = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Waiting: { screen: WaitingScreen,
      navigationOptions: {
              header: null,
          },

     },
  },
  {
    defaultNavigationOptions: { ...Layout.navOptions }
  }
)

const LoginApp = createAppContainer(Login)

export default LoginApp
