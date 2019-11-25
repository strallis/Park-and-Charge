import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { withNavigation } from 'react-navigation';

 class HeaderComponentParkeringsAlternativ extends Component {


  render() {


    return (
      <View style={styles.rect6}>
              <View style={styles.iconRow}>
              <TouchableOpacity style={styles.goBackButton} onPress={() => {
          this.props.navigation.goBack();}}>
                <Icon name="ios-arrow-back" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.text14}>Din Laddstolpe</Text>
              </View>
            </View>
    );
  }
}

const styles = StyleSheet.create({
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
    marginRight: 60,
    // marginTop: 7
  },

});

export default withNavigation(HeaderComponentParkeringsAlternativ);
