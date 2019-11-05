import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar, ScrollView, SafeAreaView, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderComponent from '../components/HeaderComponent';
import Constants from 'expo-constants';

const FIVE_SECONDS = 3500;


export default class WaitingScreen extends Component {

  static navigationOptions = {
    headerTitle: "Bedrifter",
    headerTitle: () => <HeaderComponent  title = {'Bedrifter'}/>,
  };

  render() {
    return (

        <View>

      <View style={styles.dummyHeader}>

        </View>

        <ScrollView style={styles.container}>


        <View style={styles.upperHalfContainer}>

        </View>

        <View style={styles.lowerHalfContainer}>

          <Icon name="recycle" style={styles.icon5} />

        </View>

        <View style={styles.rect7}>
          <View
            style={[
              styles.row,
              {
                marginRight: 42,
                marginLeft: 22,
                marginTop: 22,
                height: 69
              }
            ]}
          >
            <Image
              source={require("../assets/images/planet-earth1.png")}
              resizeMode="contain"
              style={styles.image}
            />
            <Text style={styles.text10}>
              Du har sparat jorden ca 1,5 ton CO2-utsläpp vilket motsvarar
              ett års köttkonsumtion
            </Text>
          </View>
        </View>


        <View style={styles.rect8}>
          <View
            style={[
              styles.stack,
              {
                marginTop: 30,
                marginLeft: 20,
                height: 75,
                width: 353
              }
            ]}
          >
            <Text style={styles.text11}>
              Du har tjänat 666 kr genom att hyra ut din parkeringsplats
            </Text>
            <Image
              source={require("../assets/images/coins1.png")}
              resizeMode="contain"
              style={styles.image2}
            />
          </View>
        </View>


        <View style={styles.rect9}>

          <View
            style={[
              styles.row,
              {
                marginRight: 40,
                marginLeft: 20,
                marginTop: 23,
                height: 81,
                flex: 1
              }
            ]}
          >
            <Image
              source={require("../assets/images/charity1.png")}
              resizeMode="contain"
              style={styles.image3}
            />
            <Text style={styles.text12}>
              Du har hjälpt 37 elbilsägare i jakten på en laddningsplats!
            </Text>
          </View>

        </View>

        </ScrollView>
          </View>


    );



  }
}


const styles = StyleSheet.create({
  dummyHeader: {
    width: "100%",
    height: '5%',
  },

  container: {
      backgroundColor: 'white',
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      //justifyContent: 'center'
    },
  text: {
    fontSize: 42,
  },

  upperHalfContainer: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    //justifyContent: 'space-around',
    padding: 10
  },
  lowerHalfContainer: {
    height: '40%',
    width: '100%',
    //justifyContent: 'space-around',
    alignItems: 'center'
  },


stack: {
  position: "relative",
  width: "100%"
},
icon5: {
  flex:1,
  color: "rgba(0,0,0,1)",
  fontSize: 300
},
rect7: {
  top: 0,
  width: "100%",
  height: 116,
  backgroundColor: "rgba(255,255,255,1)",
  position: "absolute",
  opacity: 0.7,
  borderColor: "rgba(155,155,155,1)",
  borderWidth: 1,
  flexDirection: "row"
},
row: {
  flexDirection: "row"
},
image: {
  width: 58,
  height: 63
},
text10: {
  width: 275,
  height: 68,
  color: "#121212",
  fontSize: 18,
  fontFamily: "montserrat-font",
  marginLeft: 8,
  marginTop: 1
},
rect8: {
  top: 115,
  width: "100%",
  height: 116,
  backgroundColor: "rgba(255,255,255,1)",
  position: "absolute",
  opacity: 0.7,
  borderColor: "rgba(155,155,155,1)",
  borderTopWidth: 0,
  borderBottomWidth: 1
},
text11: {
  top: 5,
  left: 76,
  width: 277,
  height: 68,
  color: "#121212",
  position: "absolute",
  fontSize: 18,
  fontFamily: "montserrat-font"
},
image2: {
  top: 0,
  left: 0,
  width: 80,
  height: 56,
  position: "absolute"
},
rect9: {
  top: 231,
  left: 0,
  width: 419,
  height: 116,
  backgroundColor: "rgba(255,255,255,1)",
  position: "absolute",
  opacity: 0.7,
  borderColor: "rgba(155,155,155,1)",
  borderTopWidth: 0,
  borderBottomWidth: 1,
  flexDirection: "row"
},
image3: {
  width: 69,
  height: 70
},
text12: {
  width: 277,
  height: 68,
  color: "#121212",
  fontSize: 18,
  fontFamily: "montserrat-font",
  marginLeft: 1,
  marginTop: 13
},
rect: {
  top: 0,
  left: 22,
  width: 375,
  height: 122,
  backgroundColor: "rgba(66,245,170,1)",
  position: "absolute"
},
text: {
  width: 223,
  height: 38,
  color: "#121212",
  fontSize: 30,
  fontFamily: "montserrat-font",
  letterSpacing: 0,
  marginTop: 61,
  marginLeft: 78
},
rect10: {
  width: 284,
  height: 59,
  backgroundColor: "rgba(255,255,255,1)",
  opacity: 0.7,
  borderRadius: 100,
  borderColor: "#000000",
  borderWidth: 1,
  marginTop: 74,
  marginLeft: 44
},
text13: {
  width: 244,
  height: 47,
  color: "#121212",
  fontSize: 19,
  fontFamily: "montserrat-font",
  textAlign: "center",
  marginTop: 6,
  marginLeft: 22
}
});
