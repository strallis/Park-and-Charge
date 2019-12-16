import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBsf3rO7bA6uBj6kbx4ekhr1YanhnWTu2A';

//placeholder='Search'
class MapInput extends React.Component {

    render() {
        return (

            <GooglePlacesAutocomplete
                placeholder='Sök på adressen där du vill hyra laddplats'
                minLength={2} // minimum length of text to search
                autoFocus={false}
                returnKeyType={'search'} // Can be left out for default return key
                listViewDisplayed={false} // true/false/undefined
                fetchDetails={true}
                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                    this.props.notifyChange(details.geometry.location);
                }
                }

                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}

                styles={{
                  listView: {
                      position: 'absolute',
                      marginTop: 40,
                      backgroundColor: 'lightgrey',
                      elevation: 1,
                      overflow: 'visible',
                  },
                  container: {
                    position: 'absolute',
                    top: '7%',
                    zIndex: 9999,
                    width: '100%'
                  },
                  textInputContainer: {
                    width: '100%',
                    overflow: 'visible',
                    backgroundColor: 'transparent',
                    height: 40,
                    borderColor: 'lightgrey'
                  },
                  description: {
                    fontWeight: 'bold'
                  },
                  predefinedPlacesDescription: {
                    color: '#1faadb'
                  },
                  textInput: {
                  fontSize: 17,
                  lineHeight: 22.5,
                  paddingBottom: 0,
                  height:'100%',
                  flex: 1
                },

                }}

                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={0}
            />

        );
    }
}
export default MapInput;
