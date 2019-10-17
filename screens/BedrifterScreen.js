import React, { Component } from "react";
import { StyleSheet, View, Image, Text, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class BedrifterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.stack,
            {
              marginLeft: -22,
              height: 469,
              width: 421
            }
          ]}
        >
          <View
            style={[
              styles.stack,
              {
                top: 122,
                left: 0,
                height: 347,
                width: 421,
                position: "absolute"
              }
            ]}
          >
            <Icon name="recycle" style={styles.icon5} />
            <View style={styles.rect7}>
              <View
                style={[
                  styles.row,
                  {
                    marginRight: 42,
                    marginLeft: 36,
                    marginTop: 22,
                    height: 69,
                    flex: 1
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
                    marginLeft: 26,
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
                    marginLeft: 32,
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
          </View>
          <View style={styles.rect}>
            <Text style={styles.text}>Dina Bedrifter</Text>
          </View>
        </View>
        <StatusBar />
        <View style={styles.rect10}>
          <Text style={styles.text13}>
            Läs mer om Stockholms Stads hållbarhetsarbete
          </Text>
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "rgba(155,155,155,1)",
    borderWidth: 1,
    borderBottomWidth: 0
  },
  stack: {
    position: "relative"
  },
  icon5: {
    top: 22,
    left: 60,
    position: "absolute",
    color: "rgba(66,245,170,1)",
    fontSize: 300
  },
  rect7: {
    top: 0,
    left: 2,
    width: 419,
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
    fontFamily: "montserrat-regular",
    marginLeft: 8,
    marginTop: 1
  },
  rect8: {
    top: 115,
    left: 0,
    width: 419,
    height: 116,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    opacity: 0.7,
    borderColor: "rgba(155,155,155,1)",
    borderWidth: 10,
    borderTopWidth: 0,
    borderBottomWidth: 1
  },
  text11: {
    top: 7,
    left: 76,
    width: 277,
    height: 68,
    color: "#121212",
    position: "absolute",
    fontSize: 18,
    fontFamily: "montserrat-regular"
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
    borderWidth: 10,
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
    fontFamily: "montserrat-regular",
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
    fontFamily: "montserrat-regular",
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
    fontFamily: "montserrat-regular",
    textAlign: "center",
    marginTop: 6,
    marginLeft: 22
  },
  navBarBedrift: {
    width: 375,
    height: 112,
    marginTop: 98,
    marginLeft: 2
  }
});
