import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  StatusBar,
  ScrollView
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import ParkHeaderComponent from '../components/ParkHeaderComponent';

export default class ParkScreen extends Component {

  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: () => <ParkHeaderComponent />,
  };
  // <View style={styles.rect}>
  //
  //   <View style={styles.textRow}>
  //     <Text style={styles.text}>Var vill du parkera?</Text>
  //     <EvilIconsIcon name="search" style={styles.icon} />
  //   </View>
  // </View>
  //
  // <View style={styles.rect3}>
  //   <Text style={styles.textKnappar}>Logga in</Text>
  // </View>
  // <View style={styles.rect2}>
  //   <Text style={styles.textKnappar}>Skapa konto</Text>
  // </View>

  render() {
    return (
      <View style={styles.container}>

          <View style={styles.upperHalfContainer}>

          <View style={styles.rect}>

            <View style={styles.textRow}>
              <Text style={styles.text}>Var vill du parkera?</Text>
              <EvilIconsIcon name="search" style={styles.icon} />
            </View>
          </View>

          </View>

          <View style={styles.lowerHalfContainer}>



          <View style={styles.rect3}>
            <Text style={styles.textKnappar}>Logga in</Text>
          </View>
          <View style={styles.rect2}>
            <Text style={styles.textKnappar}>Skapa konto</Text>
          </View>



          </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upperHalfContainer: {
    height: '40%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
    lowerHalfContainer: {
    height: '60%',
    width: '100%',
    backgroundColor: 'white',
    flexDirection: "column-reverse",
    alignItems: 'center'
  },

  image: {
    width: "100%",
    flex: 1,
    // marginTop: -284,
    // marginLeft: -200
  },
  rect4: {
    width: 375,
    height: 124,
    backgroundColor: "rgba(255,179,0,1)",
    flexDirection: "row",
    marginTop: 284,
    marginLeft: 214
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    height: 50,
    width: 50,
    marginLeft: 1
  },
  text4Row: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: 89,
    marginLeft: 89,
    marginTop: 53
  },
  rect: {
    width: 330,
    height: 52,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 0.7,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 1,
    flexDirection: "row",
    alignSelf: 'center'
  },
  text: {
    color: "#121212",
    fontSize: 24,
    fontFamily: "montserrat-font",
    letterSpacing: 0,
    marginTop: 8
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 43,
    height: 43,
    width: 43,
    marginLeft: 20
  },
  textRow: {
    height: 43,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 22,
    marginTop: 2
  },
  rect3: {
    width: 330,
    height: 52,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 0.8,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,

  },
  textKnappar: {
    color: "#121212",
    fontSize: 24,
    fontFamily: "montserrat-font",
    letterSpacing: 0,
    marginTop: 9,
    marginLeft: 100
  },
  rect2: {
    width: 330,
    height: 52,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 0.8,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: 5,
  },
  text2: {
    color: "#121212",
    fontSize: 24,
    fontFamily: "montserrat-font",
    letterSpacing: 0,
    marginTop: 15,
    marginLeft: 84
  }
});
