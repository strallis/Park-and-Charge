import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';

import AppIntroSlider from 'react-native-app-intro-slider';

import AppNavigator from './navigation/AppNavigator';



export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        show_Main_App: false,
        isWalkthroughDone: false,
        isSkip: false,
        isLoadingComplete: false

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
                      onSkip={this.on_Skip_slides} />
                    );
               }


             }
             }
           }












const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },

  title: {
   fontSize: 26,
   color: '#fff',
   fontWeight: 'bold',
   textAlign: 'center',
   marginTop: 20,
  },
  text: {
   color: '#fff',
   fontSize: 20,
  },


});
const slides = [
  {
    key: 'k1',
    title: 'Ecommerce Leader',
    text: 'Best ecommerce in the world',
    image: {
      uri:
        'https://i.imgur.com/jr6pfzM.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#F7BB64',
  },
  {
    key: 'k2',
    title: 'fast delivery',
    text: 'get your order insantly fast',
    image: {
      uri:
        'https://i.imgur.com/au4H7Vt.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#F4B1BA',
  },
  {
    key: 'k3',
    title: 'many store ',
    text: 'Multiple store location',
    image: {
      uri: 'https://i.imgur.com/bXgn893.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#4093D2',
  },
  {
    key: 'k4',
    title: '24 hours suport',
    text: ' Get Support 24 Hours with Real Human',
    image: {
      uri: 'https://i.imgur.com/mFKL47j.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#644EE2',
  }
];

//module.exports = App
