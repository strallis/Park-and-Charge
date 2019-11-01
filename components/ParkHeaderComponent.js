
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  StatusBar
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

export default class ParkHeaderComponent extends Component {
  render() {

    return (

      <View style={styles.rect4}>
        <View style={styles.text4Row}>
          <Text style={styles.text4}>ParkShark</Text>
          <MaterialCommunityIconsIcon
            name="car-hatchback"
            style={styles.icon2}
          />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  rect4: {
    width: "100%",
    height: 124,
    backgroundColor: "rgba(255,179,0,1)",
    flexDirection: "row",
  },
  text4Row: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: 89,
    marginLeft: 89,
    marginTop: 53
  },
  text4: {
    color: "#121212",
    fontSize: 34,
    fontFamily: 'atm-font',
    letterSpacing: 0,
    marginTop: 10
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    height: 50,
    width: 50,
    marginLeft: 1,
    marginTop: 10
  }


});
