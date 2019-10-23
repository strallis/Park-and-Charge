import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";


import Colors from '../constants/Colors';

export default function HyrUtComponent(props) {
  return (

    <View style={styles.container}>
    <View
      style={styles.btnWrapper1}
    >
      <EntypoIcon name="credit" style={props.focused ? styles.iconDark : styles.iconLight} />
      <Text style={props.focused ? styles.btnTextDark : styles.btnTextLight}>Hyr ut</Text>

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
  iconLight: {
    backgroundColor: "transparent",
    color: "rgba(128,128,128,1)",
    fontSize: 50,
    opacity: 0.8
  },
  iconDark: {
  backgroundColor: "transparent",
  color: "rgba(0,0,0,1)",
  fontSize: 50,
  opacity: 0.8
},
  btnTextLight: {
    color: "rgba(128,128,128,1)",
    opacity: 0.8
  },
  btnTextDark: {
    color: "rgba(0,0,0,1)",
    opacity: 0.8
  }
});
