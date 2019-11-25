import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderComponent from '../components/HeaderComponent';
import { AppRegistry, Alert } from 'react-native';
import AppIntro from 'react-native-app-walkthrough';

const FIVE_SECONDS = 1500;


export default class WalkthroughScreen extends Component {

  // static navigationOptions = {
  //   headerTitle:"Bedrifter",
  //   headerTitle: () => <HeaderComponent  title = {'Bedrifter'}/>,
  // };


componentDidMount() {
      // When mounted, wait one second, then navigate to App
      setTimeout(() => {
        // Components that are placed inside a React Navigation
        // navigator will receive the `navigation` prop.
        // It's main usage is to trigger navigation events.
        // Right here we're telling it to navigate to the route
        // with the name 'App'.
        this.props.navigation.navigate('Main');
      }, FIVE_SECONDS);
    }


  render() {
    return (
      <AppIntro>
              <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
                <View level={10}><Text style={styles.text}>Page 1</Text></View>
                <View level={15}><Text style={styles.text}>Page 1</Text></View>
                <View level={8}><Text style={styles.text}>Page 1</Text></View>
              </View>
              <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
                <View level={-10}><Text style={styles.text}>Page 2</Text></View>
                <View level={5}><Text style={styles.text}>Page 2</Text></View>
                <View level={20}><Text style={styles.text}>Page 2</Text></View>
              </View>
              <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
                <View level={8}><Text style={styles.text}>Page 3</Text></View>
                <View level={0}><Text style={styles.text}>Page 3</Text></View>
                <View level={-10}><Text style={styles.text}>Page 3</Text></View>
              </View>
              <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
                <View level={5}><Text style={styles.text}>Page 4</Text></View>
                <View level={10}><Text style={styles.text}>Page 4</Text></View>
                <View level={15}><Text style={styles.text}>Page 4</Text></View>
              </View>
            </AppIntro>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  upperHalfContainer: {
    height: '40%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row-reverse'
  },
    lowerHalfContainer: {
    height: '60%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  logoContainer: {
  //  height: '20%',
  //  width: '50%',
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-around'
  },
  carIconStyling: {
    // top: 32,
    // left: 58,
    //position: "absolute",
    color: "rgba(255,179,0,1)",
    fontSize: 70,
    textAlign: "center",
    marginTop: -30
  },
  logoTextStyling: {
    // top: 0,
    // left: 0,
    color: "rgba(255,179,0,1)",
    //position: "absolute",
    marginTop: 150,
    fontSize: 44,
    fontFamily: "atm-font",
    letterSpacing: 0,
    textAlign: "center"
  },
  containerHeader: {
    width: 375,
    height: 120
  },
  rectHeader: {
    width: 375,
    height: 120,
    backgroundColor: "rgba(255,179,0,1)"
  },
  textHeader: {
    width: 132,
    height: 38,
    color: "#121212",
    fontSize: 34,
    fontFamily: "atm-font",
    letterSpacing: 1,
    marginTop: 60,
    marginLeft: 121
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
