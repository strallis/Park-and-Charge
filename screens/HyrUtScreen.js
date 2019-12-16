import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import HeaderComponent from '../components/HeaderComponent';
import PlusButtonComponent from '../components/PlusButtonComponent';



window.navigator.userAgent = 'react-native'

export default class HyrUtScreen extends Component {
  static navigationOptions = {
    headerTitle: "Uthyrningar",
    headerTitle: () => <HeaderComponent  title = {'Uthyrningar'}/>,
  };
  constructor(props) {
  super(props)
  const { navigation } = this.props
  // this.state = {
  //   userName: navigation.state.params.username
  // }
}
  navigateParkeringsAlternativ() {
    const { navigation } = this.props
    navigation.navigate('ParkeringsAlternativ', {
      gameID: 1
    })
}

  render() {
    return (
      <View style={styles.container}>
      <EntypoIcon name="credit" style={styles.icon14} />


        <TouchableOpacity
          onPress={() => this.navigateParkeringsAlternativ()}
          style={styles.button}
        >
          <View style={styles.text9StackRow}>
            <View style={styles.text9Stack}>
              <Text style={styles.text9}>Fågelhundsgatan 18</Text>
              <Text style={styles.text12}>Garageplats</Text>
            </View>
            <MaterialCommunityIconsIcon
              name="arrow-right"
              style={styles.icon8}
            />
          </View>

        </TouchableOpacity>


          <TouchableOpacity style={styles.rect7}>
            <View style={styles.text13StackRow}>
              <View style={styles.text13Stack}>
                <Text style={styles.text13}>Gasverksvägen 10</Text>
                <Text style={styles.text14}>Gatuplats</Text>
              </View>
              <MaterialCommunityIconsIcon
                name="arrow-right"
                style={styles.icon9}
              />
            </View>
          </TouchableOpacity>


          <TouchableOpacity style={styles.icon6Row} >
            <MaterialCommunityIconsIcon name="plus-circle" style={styles.icon6} />
            <PlusButtonComponent style={styles.materialBasicFooter4} />
          </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 0,
    alignItems: 'center',
    flexDirection: "column",
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

  icon14: {
    position: "absolute",
    color: "rgba(255,179,0,1)",
    fontSize: 350,
    width: 322,
    height: 365,
    opacity: 0.27,
    marginTop: 40
  },
  button: {
    top: 35,
    width: "100%",
    height: 116,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    opacity: 0.5,
    borderColor: "rgba(155,155,155,1)",
    borderWidth: 1,
    flexDirection: "row"
  },
  text9: {
    top: 0,
    left: 0,
    width: 247,
    height: 34,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "montserrat-font",
    marginLeft:-18,
  },
  text12: {
    top: 34,
    left: 0,
    color: "rgba(155,155,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "montserrat-font",
    marginLeft:-18,
  },
  text9Stack: {
    width: 247,
    height: 54
  },
  icon8: {
    color: "rgba(155,155,155,1)",
    fontSize: 58,
    height: 58,
    width: 58,
    marginLeft: 18,
    marginTop: 6,

  },
  text9StackRow: {
    height: 64,
    flexDirection: "row",
    flex: 1,
    marginRight: 40,
    marginLeft: 44,
    marginTop: 23
  },
  rect7: {
    top: 150,
    width: 419,
    height: 116,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    opacity: 0.5,
    borderColor: "rgba(155,155,155,1)",
    borderWidth: 1,
    borderTopWidth: 0,
    flexDirection: "row"
  },
  text13: {
    top: 0,
    left: 0,
    width: 247,
    height: 34,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "montserrat-font"
  },
  text14: {
    top: 34,
    left: 0,
    color: "rgba(155,155,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "montserrat-font",

  },
  text13Stack: {
    width: 247,
    height: 54
  },
  icon9: {
    color: "rgba(155,155,155,1)",
    fontSize: 58,
    height: 58,
    width: 58,
    marginLeft: 30,
    marginTop: 5
  },
  text13StackRow: {
    height: 63,
    flexDirection: "row",
    flex: 1,
    marginRight: 37,
    marginLeft: 47,
    marginTop: 24
  },
  rect8: {
    top: 0,
    left: 29,
    width: 375,
    height: 124,
    backgroundColor: "rgba(255,179,0,1)",
    position: "absolute",
    flexDirection: "row"
  },
  icon15: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    width: 19,
    height: 40
  },
  text15: {
    width: 164,
    height: 32,
    color: "#121212",
    fontSize: 30,
    fontFamily: "atm-font",
    letterSpacing: 0,
    marginLeft: 66,
    marginTop: 4
  },
  icon15Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 105,
    marginLeft: 21,
    marginTop: 56
  },
  icon14Stack: {
    width: 422,
    height: 545,
    marginLeft: -29
  },
  icon6: {
    color: "rgba(0,0,0,1)",
    fontSize: 73,
    width: 82,
    height: 75,
    marginTop: 85,
  },
  materialBasicFooter4: {
    width: 375,
    height: 56,
    marginLeft: 487
  },
  icon6Row: {
    height: 83,
    flexDirection: "row",
    marginTop: 48,
    marginLeft: 279,
    marginRight: -848,
    marginTop: 300
  },
  navBar: {
    width: 375,
    height: 112,
    backgroundColor: "rgba(119,178,140,1)",
    opacity: 1,
    marginTop: 24
  }
});
