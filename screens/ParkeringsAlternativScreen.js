import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import GoBackButton from '../components/GoBackButton';
import HeaderComponentParkeringsAlternativ from '../components/HeaderComponentParkeringsAlternativ';

import SlotScreen from '../screens/Slot';
import CalcScreen from '../screens/Calc';

export default class ParkeringsAlternativScreen extends Component {
  static navigationOptions = {
    headerTitle: () => <HeaderComponentParkeringsAlternativ navigation={this.props.navigation} />,
  };

  constructor(props) {
  super(props)
  const { navigation } = this.props
}

  navigateCalender() {
    const { navigation } = this.props
    navigation.navigate('Calc', {
      gameID: 1
    })
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rect2Stack}>


        <View style={styles.rect2}>
          <Text style={styles.text}>Adress</Text>
          <View style={styles.text2Row}>
            <Text style={styles.text2}>Fågelhundsgatan 18</Text>
            <TouchableOpacity>
            <Text style={styles.text3}>Ändra</Text>
            </TouchableOpacity>
          </View>
        </View>

          <View style={styles.rect3}>
            <View style={styles.text4StackStack}>
              <View style={styles.text4Stack}>
                <Text style={styles.text4}>Pris</Text>

              </View>
              <Text style={styles.text5}>3 SEK/Min</Text>
              <Text style={styles.text6}>Ändra</Text>


            </View>
          </View>


          <View style={styles.rect4}>
            <View style={styles.text7ColumnRow}>
              <View style={styles.text7Column}>
                <Text style={styles.text7}>Tillgänglighet</Text>
                <Text style={styles.text13}>Tillgänglig nu</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.navigateCalender()}
                style={styles.button}
              >
              <Text style={styles.text9}>Ändra</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#000000",
  },
  icon: {
    marginTop: 40,
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    width: 19,
    height: 40,
    alignSelf: "center",

  },
  goBackButton:{
    alignSelf: "center",
    marginTop: 2,
    alignSelf: "center",

  },
  rect2: {
    top: 35,
    width: "100%",
    height: 116,
    backgroundColor: "rgba(255,255,255,1)",
    //position: "absolute",
    opacity: 0.7,
    borderColor: "rgba(155,155,155,1)",
    borderWidth: 1
  },
  text: {
    color: "rgba(0,0,0,1)",
    fontSize: 26,
    fontFamily: "montserrat-700",
    marginTop: 15,
    marginLeft: 25,
  },
  text2: {
    color: "rgba(0,0,0,1)",
    fontSize: 26,
    fontFamily: "montserrat-font",
    marginTop: 16
  },
  text3: {
    color: "rgba(255,179,0,1)",
    fontSize: 22,
    fontFamily: "montserrat-font",
    //marginLeft: 15
  },
  text2Row: {
    //height: 42,
    flexDirection: "row",
    marginLeft: 25,
    marginRight: 40
  },
  rect3: {
    top: 35,
    width: 419,
    height: 116,
    backgroundColor: "rgba(255,255,255,1)",
    //position: "absolute",
    opacity: 0.7,
    borderColor: "rgba(155,155,155,1)",
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 1
  },
  text4: {
    top: 16,
    left: 35,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 26,
    fontFamily: "montserrat-700"
  },
  rect5: {
    top: 0,
    left: 0,
    width: 419,
    height: 116,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    opacity: 0.7,
    borderColor: "rgba(155,155,155,1)",
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 1
  },
  text10: {
    color: "rgba(0,0,0,1)",
    fontSize: 26,
    fontFamily: "montserrat-700",
    marginTop: 16,
    marginLeft: 35
  },
  text11: {
    color: "rgba(0,0,0,1)",
    fontSize: 26,
    fontFamily: "montserrat-font",
    marginTop: 16
  },
  text12: {
    color: "rgba(255,179,0,1)",
    fontSize: 22,
    fontFamily: "montserrat-font",
    marginLeft: 133
  },
  text11Row: {
    height: 42,
    flexDirection: "row",
    marginLeft: 35,
    marginRight: 40
  },
  text4Stack: {
    width: 419,
    height: 116,
    //position: "absolute"
  },
  text5: {
    top: 58,
    left: 35,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 26,
    fontFamily: "montserrat-font"
  },
  text6: {
    top: 42,
    left: 290,
    color: "rgba(255,179,0,1)",
    position: "absolute",
    fontSize: 22,
    fontFamily: "montserrat-font"
  },
  text4StackStack: {
    width: 419,
    height: 116
  },
  rect4: {
    top: 265,
    width: 419,
    height: 116,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    opacity: 0.7,
    borderColor: "rgba(155,155,155,1)",
    borderWidth: 1,
    borderBottomWidth: 1
  },
  text7: {
    color: "rgba(0,0,0,1)",
    fontSize: 26,
    fontFamily: "montserrat-700"
  },
  text13: {
    color: "rgba(0,0,0,1)",
    fontSize: 26,
    fontFamily: "montserrat-font",
    marginTop: 20
  },
  text7Column: {
    width: 190
  },
  text9: {
    color: "rgba(255,179,0,1)",
    fontSize: 22,
    fontFamily: "montserrat-font",
    marginLeft: 65,
    marginTop: 25
  },
  text7ColumnRow: {
    height: 72,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 35,
    marginRight: 40
  },
  rect2Stack: {
  width: "100%",
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start'
  },
});
