import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class WaitingScreen extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <View style={styles.icon4Stack}>
      //     <Icon name="car-hatchback" style={styles.icon4} />
      //     <Text style={styles.text}>ParkShark</Text>
      //   </View>
      //   <StatusBar />
      // </View>
      <View style={{flex: 1, flexDirection: 'col', justifyContent: 'space-between'}}>


      <View style={{flex:2, backgroundColor: 'skyblue', flexDirection: 'column',alignContent: 'center',}} >

        <View style={styles.icon4Stack}>
          <Icon name="car-hatchback" style={styles.icon4} />
          <Text style={styles.text}>ParkShark</Text>
        </View>

      </View>


      <View style={{flex:1,backgroundColor: 'white'}} />
      <View style={{flex:1, backgroundColor: 'white'}} />

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLarge: {
    flex: 2,
  },
  icon4: {
    top: 32,
    left: 58,
    position: "absolute",
    color: "rgba(255,179,0,1)",
    fontSize: 70
  },
  text: {
    top: 0,
    left: 0,
    color: "rgba(255,179,0,1)",
    position: "absolute",
    fontSize: 44,
    fontFamily: "atm-font",
    letterSpacing: 0,
    textAlign: "center"
  },
  icon4Stack: {
    flex: 1,
  }
});
