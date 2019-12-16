import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";


import Colors from '../constants/Colors';

export default function ProfilComponent(props) {
  return (

    <View style={styles.container}>
    <View
      style={styles.btnWrapper1}
    >

      <Icon name="account" style={props.focused ? styles.iconDark : styles.iconLight} />
      <Text style={props.focused ? styles.btnTextDark : styles.btnTextLight}>Profil</Text>

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
  iconDark: {
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    opacity: 1
  },
  iconLight: {
    color: "rgba(128,128,128,1)",
    fontSize: 50,
    opacity: 1
},
  btnTextLight: {
    color: "rgba(128,128,128,1)",
    opacity: 1,
    paddingTop: 4,
    fontSize: 14,
    fontFamily: "montserrat-font",
  },
  btnTextDark: {
    color: "rgba(0,0,0,1)",
    opacity: 1,
    paddingTop: 4,
    fontSize: 14,
    fontFamily: "montserrat-font",
  }
});
