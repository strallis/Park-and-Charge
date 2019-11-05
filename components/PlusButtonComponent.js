import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default class PlusButtonComponent extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.container, this.props.style]}>
        <TouchableOpacity style={styles.btnWrapper1}>
          <MaterialCommunityIconsIcon name="television" style={styles.icon1} />
          <Text style={styles.btn1Text}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activebtnWrapper}>
          <MaterialCommunityIconsIcon
            name="music-note"
            style={styles.activeIcon}
          />
          <Text style={styles.activeText}>Music</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnWrapper2}>
          <MaterialCommunityIconsIcon name="book" style={styles.icon2} />
          <Text style={styles.btn2Text}>Books</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnWrapper3}>
          <MaterialCommunityIconsIcon name="account" style={styles.icon3} />
          <Text style={styles.btn3Text}>Profil</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3f51b5",
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
    fontSize: 24,
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
    color: "rgba(128,128,128,1)",
    fontSize: 24,
    opacity: 1
  },
  activeText: {
    color: "rgba(128,128,128,1)",
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
    fontSize: 24,
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
    fontSize: 24,
    opacity: 0.8
  },
  btn3Text: {
    color: "rgba(128,128,128,1)",
    opacity: 0.8,
    fontFamily: "montserrat-font"
  }
});
