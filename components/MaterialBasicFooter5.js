import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default class MaterialBasicFooter5 extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>


        <TouchableOpacity
          onPress={() => console.log("Navigate to Untitled5")}
          style={styles.btnWrapper1}
        >
          <EntypoIcon name="bar-graph" style={styles.icon1} />
          <Text style={styles.btn1Text}>Bedrifter</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => console.log("Navigate to Untitled2")}
          style={styles.activebtnWrapper}
        >
          <MaterialCommunityIconsIcon
            name="alpha-p-box"
            style={styles.activeIcon}
          />
          <Text style={styles.activeText}>Parkera</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => console.log("Navigate to Untitled3")}
          style={styles.btnWrapper2}
        >
          <EntypoIcon name="credit" style={styles.icon2} />
          <Text style={styles.btn2Text}>Hyr ut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Navigate to Untitled1")}
          style={styles.btnWrapper3}
        >
          <MaterialCommunityIconsIcon name="account" style={styles.icon3} />
          <Text style={styles.btn3Text}>Profil</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowOffset: {
      height: -2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon1: {
    backgroundColor: "transparent",
    color: "rgba(128,128,128,1)",
    fontSize: 50,
    opacity: 0.8
  },
  btn1Text: {
    color: "rgba(128,128,128,1)",
    opacity: 0.8
  },
  activebtnWrapper: {
    flex: 1,
    alignItems: "center",
    paddingTop: 6,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    opacity: 1
  },
  activeText: {
    color: "rgba(0,0,0,1)",
    opacity: 1,
    paddingTop: 4,
    fontSize: 14
  },
  btnWrapper2: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon2: {
    backgroundColor: "transparent",
    color: "rgba(128,128,128,1)",
    fontSize: 50,
    opacity: 0.8
  },
  btn2Text: {
    color: "rgba(128,128,128,1)",
    opacity: 0.8
  },
  btnWrapper3: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon3: {
    backgroundColor: "transparent",
    color: "rgba(128,128,128,1)",
    fontSize: 50,
    opacity: 0.8
  },
  btn3Text: {
    color: "rgba(128,128,128,1)",
    opacity: 0.8
  }
});
