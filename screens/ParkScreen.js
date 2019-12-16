import React, { Component } from "react";
import MapView from 'react-native-maps';
import { Button } from "react-native-elements";
import { Marker } from 'react-native-maps';
import {TouchableHighlight } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import getDirections from 'react-native-google-maps-directions';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapInput from '../components/MapInput';

import {
  Dimensions,
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
//import ParkHeaderComponent from '../components/ParkHeaderComponent';

const markerImage = require('../assets/images/markerRed5.png');
const markerImage2 = require('../assets/images/markerYellow1.png');

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAPS_APIKEY = 'AIzaSyBsf3rO7bA6uBj6kbx4ekhr1YanhnWTu2A';

const stylesButton = StyleSheet.create({
   container: {
      flex: 1
   },
   button: {
      backgroundColor: "rgba(255,179,0,1)",
      width: '100%',
      opacity: 0.8,

   }
})

const stylesButton2 = StyleSheet.create({
   container: {
      flex: 1,

   },
   button: {
     flex: 0.9,
     marginBottom: 4,
      backgroundColor: "rgba(255,179,0,1)",

   }
})

const stylesButton3 = StyleSheet.create({
   container: {
      flex: 0.4
   },
   button: {
     flex: 0.9,
     marginBottom: 4,
     backgroundColor: 'red',
   }
})

export default class ParkScreen extends Component {

  handleGetDirections = () => {
    const data = {
       source: {
        latitude: this.state.location.coords.latitude,
        longitude: this.state.location.coords.longitude,
      },
      destination: {
        latitude: this.state.booked_destination.latitude,
        longitude: this.state.booked_destination.longitude
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
    }

    getDirections(data)
  }

  constructor(props) {
    super(props)

    const { navigation } = this.props

    this.state = {
      selectedMarkerIndex: null,
      booked_destination: {
        latitude: 59.33,
        longitude: 18.05
      },

      Pressed1: false,
      Pressed2: false,
      Pressed3: false,
      flag: false,
      showDirections:false,
      location: null,
      errorMessage: null,
      coordinates: [
        {
          latitude: 59.33,
          longitude: 18.05,
        },
        {
          latitude: 59.34,
          longitude: 18.07,
        },
      ],
      //userName: navigation.state.params.username,

       markers: [
         {latlng:{latitude: 59.35,longitude: 18.06},
          title: "Parkeringssplats",
          description: "Utomhusparkering\nValhallavägen 8\n30 kr/h",
          pressed: false,

         },
         {latlng:{latitude: 59.34,longitude: 18.07},
          title: "Parkeringssplats",
          description: "Garageparkering\nEngelbrektsgatan 19\n60 kr/h",
          pressed: false,

         },
         {latlng:{latitude: 59.33,longitude: 18.05},
          title: "Parking Spot",
          description: "Garageparkering\nKungsklippan 11\n50 kr/h",
          pressed: false,

         },
     ]
   },
  this.mapView = null
  }

  componentDidMount() {
  navigator.geolocation.getCurrentPosition(
    position => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }
      });
    },
  (error) => console.log(error.message),
  { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );
  this.watchID = navigator.geolocation.watchPosition(
    position => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }
      });
    }
  );
}

_getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    console.log("****************")
    console.log(location)
    console.log("****************")
    console.log(this.state.location.coords)
    console.log("-----------------")
};

onPressMarker(e, index) {
    this.setState({selectedMarkerIndex: index});
}

addMarker(coordinates) {
  // Remove the following line after testing, its just to show coordinates as a warning in console.
  console.log(coordinates);
  this.setState({
    markers: [...this.state.markers,
      { latlng: coordinates }
    ]
  })
  console.log(this.state.markers);
}

markerClicked(marker, index){
  console.log("Daniel");
  this.setState({booked_destination: {latitude:marker.latlng.latitude, longitude:marker.latlng.longitude}});
  this.setState({selectedMarkerIndex: index});
  this.setState({locationOnePressed: true});
  this.setState({flag:true});
  marker.pressed = true;
}

pressedBookedButton(marker){
  console.log("The spot has been booked");
  marker.pressed = true;
}

getCoordsFromName(loc) {
    this.setState({
        region: {
            latitude: loc.lat,
            longitude: loc.lng,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003
        }
    });
}

onMapRegionChange(region){
  this.setState({region});
}

componentWillMount(){
  this._getLocationAsync();
}

componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
}

  render() {
    // console.log(this.state.region);
    // console.log(this.state.region.latitude);
    return (
      <View style={styles.container}>
      <MapInput style = {styles.inputStyle} notifyChange={(loc) => this.getCoordsFromName(loc)}/>

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

        region={this.state.region}
        onRegionChangeComplete={(reg) => this.onMapRegionChange(reg)}

        showsUserLocation = {true}
        showsMyLocationButton = {true}>

        {this.state.markers.map((marker,i) => (
          <Marker
          key = {i}
          coordinate = {marker.latlng}
          title = {marker.title}
          onPress = {(e) => this.onPressMarker(e, i)}
          image = {this.state.selectedMarkerIndex === i || marker.pressed ? markerImage2 : markerImage}
          >
          <MapView.Callout onPress = {()=>this.markerClicked(marker, i)}><View style={styles.callout}>
          <Button buttonStyle={marker.pressed ? stylesButton3.button:stylesButton2.button}
          title={marker.pressed ? "Avboka":"Boka"}
          titleStyle={{ color: "rgba(10,10,10,1)", fontFamily:'montserrat-font' }}
          fontFamily = 'montserrat-font'

          />
          <View style = {{    borderRadius: 4,  borderWidth: 0.5,borderColor: '#d6d7da',}}>
            <Text style = {{    fontFamily : 'montserrat-font', marginTop: 5, marginBottom: 5,  marginRight: 5, marginLeft: 5}}>
            {marker.description}</Text>
            </View>
          </View>
          </MapView.Callout>
          </Marker>
        ))}

        {(this.state.flag) && (

     <MapViewDirections
       origin={
         {
           latitude: this.state.location.coords.latitude,
           longitude: this.state.location.coords.longitude,
         }
       }
       waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
       destination={this.state.booked_destination}
       apikey={GOOGLE_MAPS_APIKEY}
       strokeWidth={3}
       strokeColor="blue"
       optimizeWaypoints={true}
       onStart={(params) => {
         console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
       }}
       onReady={result => {
         console.log('Distance: ${result.distance} km')
         console.log('Duration: ${result.duration} min.')

         this.mapView.fitToCoordinates(result.coordinates, {
           edgePadding: {
             right: (width / 20),
             bottom: (height / 20),
             left: (width / 20),
             top: (height / 20),
           }
         });
       }}
       onError={(errorMessage) => {
         // console.log('GOT AN ERROR');
       }}
     />
   )}
        </MapView>


        <View style = {{ width: '100%'}}>
          <Button buttonStyle={stylesButton.button} onPress ={()=>this.handleGetDirections()} titleStyle={{ color: "rgba(10,10,10,1)",  fontSize:21, fontFamily: 'montserrat-font'}} title="Vägvisning" fontFamily = 'montserrat-font'/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyle:{
    flex:1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  mapStyle: {
    flex:1,
    width: '100%', //Dimensions.get('window').width,
    height: '100%', //Dimensions.get('window').height
  },
});
