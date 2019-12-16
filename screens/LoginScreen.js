import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import ParkHeaderComponent from '../components/ParkHeaderComponent';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

var CreateSession = require('../api.js').signin;
const markerImage = require('../assets/images/markerRed5.png');
const markerImage2 = require('../assets/images/markerYellow1.png');

export default class LoginScreen extends Component {

  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: () => <ParkHeaderComponent />,
  };
  constructor(props) {
  super(props)
  const { navigation } = this.props
  }

  state = {
     username: '',
     markers: [
       {latlng:{latitude: 59.35,longitude: 18.06},
        description: "Utomhusparkering\nValhallavägen 8\n30 kr/h",
        pressed: false,

       },
       {latlng:{latitude: 59.34,longitude: 18.07},
        description: "Garageparkering\nEngelbrektsgatan 19\n60 kr/h",
        pressed: false,

       },
       {latlng:{latitude: 59.33,longitude: 18.05},
        description: "Garageparkering\nKungsklippan 11\n50 kr/h",
        pressed: false,
       },
   ]
  }


navigateParkera() {
  const { navigation } = this.props
  const { username } = this.state
  navigation.navigate('Waiting', {
    username
  })
//  this.props.navigation.navigate('Calc', { bookingDate : '2017-10-10' })
}

  render() {
    return (
      <View style={styles.container}>

      <MapView
      provider="google"
      style = {styles.mapStyle}
      ref={c => this.mapView = c}
      initialRegion = {{
        latitude: 59.35,
        longitude: 18.07,
        latitudeDelta: 0.05,
        longitudeDelta: 0.025
      }}

      showsUserLocation = {true}
      showsMyLocationButton = {true}>

      {this.state.markers.map((marker,i) => (
        <Marker
        key = {i}
        coordinate = {marker.latlng}
        title = {marker.title}
        image = {this.state.selectedMarkerIndex === i || marker.pressed ? markerImage2 : markerImage}
        >
        </Marker>
      ))}

      </MapView>

      <TouchableOpacity style={styles.rect32} onPress={() => this.navigateParkera() }>
        <Text style={styles.textKnappar}>Logga in</Text>
      </TouchableOpacity>

      <View style={styles.rect3}>
      <TextInput
        style={styles.textKnappar}
        autoCapitalize="none"
        onChangeText={text => onChangeText(text)}
        autoCorrect={false}
        returnKeyType="next"
        placeholder="Användarnamn"
        placeholderTextColor="rgba(180,180,180,0.8)"
        onChangeText={text => this.setState({ username: text })}
      />
      </View>


      </View>
    );
  }
}
// <View style={styles.upperHalfContainer}>
//
// <View style={styles.rect}>
//
//   <View style={styles.textRow}>
//     <Text style={styles.text}>Var vill du parkera?</Text>
//     <EvilIconsIcon name="search" style={styles.icon} />
//   </View>
// </View>
//
// </View>
//
// <View style={styles.lowerHalfContainer}>
//
//
// <TouchableOpacity style={styles.rect3} onPress={() => this.navigateParkera() }>
//   <Text style={styles.textKnappar}>Logga in</Text>
// </TouchableOpacity>
//
// <View style={styles.rect3}>
// <TextInput
//   style={styles.textKnappar}
//   autoCapitalize="none"
//   onChangeText={text => onChangeText(text)}
//   autoCorrect={false}
//   returnKeyType="next"
//   placeholder="Username"
//   placeholderTextColor="rgba(180,180,180,0.8)"
//   onChangeText={text => this.setState({ username: text })}
// />
// </View>
// </View>
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapStyle: {
    flex:1,
    width: '100%', //Dimensions.get('window').width,
    height: '100%', //Dimensions.get('window').height
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
    //opacity: 0.8,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: 5,
    marginLeft: 20,
    marginBottom: 10,
    position:'absolute',
    bottom: 65,

  },
  rect32: {
    width: 330,
    height: 52,
    backgroundColor: "rgba(255,255,255,1)",
    //opacity: 0.8,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 20,
    marginLeft: 20,
    position:'absolute',
    bottom:115,

  },
  textKnappar: {
    color: "#121212",
    fontSize: 24,
    fontFamily: "montserrat-font",
    letterSpacing: 0,
    marginTop: 9,
    //marginLeft: 10,
    alignSelf: 'center',
    opacity: 0.8,
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
