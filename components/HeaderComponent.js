


import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rect}>
          <Text style={styles.text}>Bedrifter</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 115,
  },
  rect: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,179,0,1)"
  },
  text: {
    width: 132,
    height: 38,
    color: "#121212",
    fontSize: 34,
    fontFamily: "atm-font",
    letterSpacing: 0,
    marginTop: 45,
    marginLeft: 121
  }
});
