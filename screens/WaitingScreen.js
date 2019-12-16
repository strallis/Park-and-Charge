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
        this.props.navigation.navigate('Parkera');
      }, FIVE_SECONDS);
    }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.upperHalfContainer}>
                  <View style={styles.logoContainer}>
                    <Text style={styles.logoTextStyling}>Park&Charge</Text>
                    <Icon name="car-hatchback" style={styles.carIconStyling} />
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
    height: '40%',
    width: '100%',
    backgroundColor: 'white',
    // backgroundColor: "rgba(255,179,0,1)",
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row-reverse'
  },
    lowerHalfContainer: {
    height: '60%',
    width: '100%',
    backgroundColor: 'white',
    // backgroundColor: "rgba(255,179,0,1)",
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  logoContainer: {
    // color: "rgba(255,179,0,1)",
  //  height: '20%',
  //  width: '50%',
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-around'
  },
  carIconStyling: {
    // top: 32,
    // left: 58,
    //position: "absolute",
    color: "rgba(255,179,0,1)",
    // color: "black",
    fontSize: 70,
    textAlign: "center",
    marginTop: -30
  },
  logoTextStyling: {
    // top: 0,
    // left: 0,
    color: "rgba(255,179,0,1)",
    // color: "black",
    //position: "absolute",
    marginTop: 150,
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
    letterSpacing: 1,
    marginTop: 60,
    marginLeft: 121
  },

});
