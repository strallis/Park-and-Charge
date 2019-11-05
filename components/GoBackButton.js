


import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class GoBackButton extends Component {


  render() {

    return (
      <View style= {styles.padding} >
        <TouchableOpacity style={styles.goBackButton} >
          <Icon name="ios-arrow-back" style={styles.icon} />
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  padding:{
    marginLeft: 10
  },
  rect6: {
    width: "100%",
    height: 115,
    flex: 1,
    backgroundColor: "rgba(255,179,0,1)",
    flexDirection: "column",

  },
  iconRow: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',

  //  marginTop: 25,

  },
  icon: {
    marginTop: 40,
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    width: 19,
    height: 40,
    alignSelf: "center",

  },
  goBackButton:{
    alignSelf: "center",
    marginTop: 2,
    alignSelf: "center",

  },
  text14: {
    marginTop: 40,
    color: "#121212",
    fontSize: 34,
    fontFamily: "atm-font",
    letterSpacing: 0,
    alignSelf: "center",
    marginRight: 20,
    // marginTop: 7
  },

});
