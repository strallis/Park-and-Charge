


import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class HeaderComponent extends Component {
  render() {

    

    return (
      <View style={styles.container}>
        <View style={styles.rect}>
          <Text style={styles.text}>{this.props.title}</Text>
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
    flex: 1,
    backgroundColor: "rgba(255,179,0,1)"
  },
  text: {
    color: "#121212",
    fontSize: 34,
    fontFamily: "atm-font",
    marginTop: 45,
    alignSelf: "center",
  }
});
