import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderComponent from '../components/HeaderComponent';

const FIVE_SECONDS = 1500;


export default class WaitingScreen extends Component {

  // static navigationOptions = {
  //   headerTitle:"Bedrifter",
  //   headerTitle: () => <HeaderComponent  title = {'Bedrifter'}/>,
  // };


componentDidMount() {
      // When mounted, wait one second, then navigate to App
      setTimeout(() => {
        // Components that are placed inside a React Navigation
        // navigator will receive the `navigation` prop.
        // It's main usage is to trigger navigation events.
        // Right here we're telling it to navigate to the route
        // with the name 'App'.
        this.props.navigation.navigate('Main');
      }, FIVE_SECONDS);
    }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.upperHalfContainer}>
                  <View style={styles.logoContainer}>
                    <Icon name="car-hatchback" style={styles.carIconStyling} />
                    <Text style={styles.logoTextStyling}>ParkShark</Text>
                  </View>
        </View>

      <View style={styles.lowerHalfContainer}/>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  upperHalfContainer: {
    height: '30%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
    lowerHalfContainer: {
    height: '70%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  logoContainer: {
    height: '20%',
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  carIconStyling: {
    top: 32,
    left: 58,
    position: "absolute",
    color: "rgba(255,179,0,1)",
    fontSize: 70
  },
  logoTextStyling: {
    top: 0,
    left: 0,
    color: "rgba(255,179,0,1)",
    position: "absolute",
    fontSize: 44,
    fontFamily: "atm-font",
    letterSpacing: 0,
    textAlign: "center"
  },
  containerHeader: {
    width: 375,
    height: 120
  },
  rectHeader: {
    width: 375,
    height: 120,
    backgroundColor: "rgba(255,179,0,1)"
  },
  textHeader: {
    width: 132,
    height: 38,
    color: "#121212",
    fontSize: 34,
    fontFamily: "atm-font",
    letterSpacing: 0,
    marginTop: 60,
    marginLeft: 121
  },

});
