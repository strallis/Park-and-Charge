import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

import * as Font from 'expo-font';


import Colors from '../constants/Colors';

export default function BedrifterComponent(props) {

  navigationOptions = {
    headerTitle:"Bedrifter",
    headerTitle: () => <HeaderComponent  title = {'Bedrifter'}/>,
  };

  return (

    <View style={styles.container}>
    <View
      style={styles.btnWrapper1}
    >

      <EntypoIcon name="bar-graph" style={props.focused ? styles.icon1Dark : styles.icon1Light} />
      <Text style={props.focused ? styles.btn1TextDark : styles.btn1TextLight}>Bedrifter</Text>

    </View>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    flex: 1
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
  icon1Light: {
    backgroundColor: "transparent",
    color: "rgba(128,128,128,1)",
    fontSize: 50,
    opacity: 0.8
  },
  icon1Dark: {
  backgroundColor: "transparent",
  color: "rgba(0,0,0,1)",
  fontSize: 50,
  opacity: 0.8
},
  btn1TextLight: {
    color: "rgba(128,128,128,1)",
    opacity: 0.8,
    fontFamily: "montserrat-font"
  },
  btn1TextDark: {
    color: "rgba(0,0,0,1)",
    opacity: 0.8
  }
});
