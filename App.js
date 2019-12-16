import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//import Icon from 'react-native-vector-icons/FontAwesome';

import AppIntroSlider from 'react-native-app-intro-slider';

import AppNavigator from './navigation/AppNavigator';




export default class App extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
        show_Main_App: false,
        isWalkthroughDone: false,
        isSkip: false,
        isLoadingComplete: false,
        userIcon:null

    };
}

async  loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      'montserrat-font': require('./assets/fonts/montserrat-regular.ttf'),
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      //'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      'atm-font': require('./assets/fonts/atma-500.ttf'),
      'montserrat-700': require('./assets/fonts/montserrat-700.ttf'),

    }),

  ]);
}


       on_Done_all_slides= () => {

        this.setState({ isWalkthroughDone: true });
        console.log('done!');
      };


         on_Skip_slides= () => {
        this.setState({ isSkip: true });
        return true;
      };



    handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
        console.log('loading complete')
      };
      handleLoadingError = (error) => {

        // In this case, you might want to report the error to your error reporting
        // service, for example Sentry
        console.warn(error);
      };


          _renderNextButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Ionicons
              name="md-arrow-round-forward"
              color="rgba(255, 255, 255, .9)"
              size={24}
              style={{ backgroundColor: 'transparent' }}
            />
          </View>
        );
      };
        _renderDoneButton = () => {
          return (
            <View style={styles.buttonCircle}>
              <Ionicons
                name="md-checkmark"
                color="rgba(255, 255, 255, .9)"
                size={24}
                style={{ backgroundColor: 'transparent' }}
              />
            </View>
          );
        };

        _renderSkipButton = () => {
          return (
            <View style={styles.buttonCircle}>
            <Text style={styles.skipStyle} >
              Skip
            </Text>
            </View>
          );
        };
render() {

  if (!this.state.isLoadingComplete ) {
            return (
              <AppLoading
                startAsync={this.loadResourcesAsync}
                onError={this.handleLoadingError}
                onFinish={this.handleFinishLoading}

              />
              );
  } else {
      console.log('got in here');


              if (this.state.isWalkthroughDone) {

                        return (
                          <View style={styles.container}>
                            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}

                            <View style={styles.containernavBarPark}>
                              <AppNavigator style={styles.navBarPark} />
                            </View>

                          </View>

                        );
                  } else {

                   return (
                     <AppIntroSlider slides={slides}
                     onDone={this.on_Done_all_slides}
                      showSkipButton={true}
                      onSkip={this.on_Done_all_slides}
                      renderDoneButton={this._renderDoneButton}
                      renderNextButton={this._renderNextButton}
                      renderSkipButton={this._renderSkipButton}
                       />
                    );
               }


             }
             }
           }



const styles = StyleSheet.create({
  iconLight: {
    fontSize: 50,
    opacity: 1
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  skipStyle:{
    fontSize: 16,
    color: "white",
    fontFamily: 'montserrat-font',
    fontWeight: 'bold'
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containernavBarPark: {
  flex: 1,
  width: 375,
  height: 112,
  justifyContent: 'flex-end',
},
navBarPark: {
  width: 375,
  height: 112
},
mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 310,
    height: 300,
  },
  logoImage: {
    width: 390,
    height: 390,
  },
  title: {
   fontSize: 26,
   color: '#fff',
   fontWeight: 'bold',
   textAlign: 'center',
   marginTop: 20,
   fontFamily: 'montserrat-font',
  },
  titleLogo: {
   fontSize: 26,
   color: '#fff',
   fontWeight: 'bold',
   textAlign: 'center',
   marginTop: 40,
   fontFamily: 'montserrat-font',
  },
  textLogo: {
   color: '#fff',
   fontSize: 20,
   marginTop: -40,
   fontFamily: 'montserrat-font',
  },
  text: {
   color: '#fff',
   fontSize: 20,
   fontFamily: 'montserrat-font',
  },
  textWhiteImg: {
   color: 'black',
   fontSize: 20,
   fontFamily: 'montserrat-font',
  },
  titleWhiteImg: {
   fontSize: 26,
   color: 'black',
   fontWeight: 'bold',
   textAlign: 'center',
   marginTop: 20,
   fontFamily: 'montserrat-font',
  },



});
// Fa in ngt med typ hyra ut nar du inte använder dne.

const slides = [
  {
    key: 'logoSlide',
    title: 'Välkommen!',
    text: 'Park&Charge är ett nätverk där elbilsägare sammankopplas för att hyra, samt hyra ut sina laddplatser till varandra.',
    image: require('./assets/images/logo2.png'),
    titleStyle: styles.titleLogo,
    textStyle: styles.textLogo,
    imageStyle: styles.logoImage,
    backgroundColor: "rgba(255,179,0,1)",

  },
  {
    key: 'parkeraSlide',
    title: 'Hyr andras laddplatser!',
    text: 'För att hyra andras laddplatser navigerar du till parkeringsläget.',
    image: require('./assets/images/park.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: "rgba(255,179,0,1)",
  },
  {
    key: 'hyrutSlide',
    title: 'Vill du hyra ut din egen laddstolpe?',
    text: 'Här lägger du upp, schemalägger och ställer in pris för din laddplats.',
    image: require('./assets/images/hyrut.png'),
    titleStyle: styles.titleWhiteImg,
    textStyle: styles.textWhiteImg,
    imageStyle: styles.image,
    backgroundColor: "white",
  },
  // {
  //   key: 'hyrutSlide',
  //   title: 'Vill du hyra ut din egen laddstolpe till andra elbilsägare?',
  //   text: 'Då letar du upp den här symbolen! Här kan du registrera dina laddplatser, schemalägga när de är tillgängliga och ställa in hur mycket du vill ha betalt.',
  //   image: require('./assets/images/hyrut.png'),
  //   titleStyle: styles.titleWhiteImg,
  //   textStyle: styles.textWhiteImg,
  //   imageStyle: styles.image,
  //   backgroundColor: "white",
  // },

  {
    key: 'miljoSlide',
    title: 'Hur mycket har du bidragit till klimatet?',
    text: 'Här kan du se hur mycket din insats bidragit för dig, andra elbilsägare och klimatet.',
    image: require('./assets/images/miljohjalte2.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: "rgba(255,179,0,1)",
  },
  // {
  //   key: 'profilSlide',
  //   title: 'Kontoinställningar',
  //   text: 'Under profilsidan hittar du saker som kontoinställningar och parkeringshistorik.',
  //   image: require('./assets/images/profil.png'),
  //   titleStyle: styles.titleWhiteImg,
  //   textStyle: styles.textWhiteImg,
  //   imageStyle: styles.image,
  //   backgroundColor: "white",
  // }
];

//module.exports = App
