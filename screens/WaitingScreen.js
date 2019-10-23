import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class WaitingScreen extends Component {
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

});
