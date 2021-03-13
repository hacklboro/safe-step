import React, { Component, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TextInput, TouchableOpacity, Button, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { getLocation } from "../location-management/location-manager.js"
import { getNearbyLocations } from "./google_api_wrapper.js";
import { render } from 'react-dom';

const styles = StyleSheet.create({
  shadow: {
    elevation: 5
  },
  container: {
    flex: 1,
    justifyContent: "center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,  
  },
  mapContainer: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    padding: 10,
    borderRadius: 15,
  },
  map: {
    width: Dimensions.get('window').width,
    height: '100%',
    zIndex: -1
  },
  suggestionsContainer: {
    position: "absolute", 
    top: 100, 
    height: "auto", 
    maxHeight: 250, 
    width: "80%", 
    textAlign: "center",
    zIndex: 1, 
    backgroundColor: "white",
    alignSelf: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  locationOption: {
    color: "black",
    paddingVertical: 10,
    fontSize: 18,
    marginHorizontal: 10,
  },
  locationOptionWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    marginHorizontal: 5
  }
});

const DestinationSearch = (props) => {
  return (
    <TextInput 
      style={{ marginTop: 20, borderBottomWidth: 2, borderBottomColor: "gray" }}
      placeholder={"Destination"} 
      width={"80%"} 
      onChangeText = {(value) => {
        if (!value) return;  // if value is empty
        props.callback(value);
      }}
      />
  );
};

LocationOption = (props) => {
  const selectLocation = () => {
    console.log(props.location.geometry.location);

  };

  return <View >
    <TouchableOpacity style={styles.locationOptionWrapper} onPress={() => {Map.addPin("test")}}>
      <Text style={styles.locationOption}>{props.location.name}</Text>
    </TouchableOpacity>
  </View>
}


LocationSuggestions = (props) => {
  const locationsObjs = props.locations.map((location, index) => <LocationOption key={index} location={location} />); 

  return <ScrollView style={styles.suggestionsContainer}>{locationsObjs}</ScrollView>;
};

onConfirm = () => {
  return(
    <View>
      {console.log("RUNNING BUTTON FUNCTION")}
    </View>
  )
}
 

class Map extends Component {state = { pins: [] }

  constructor( props ) {
    super(props);
    this.addPin = this.addPin.bind(this);
    this.clearPins = this.clearPins.bind(this);
  }

  addPin(newPin) {
    console.log("called");
    this.state.pins.push(newPin);
    this.forceUpdate(); // force a refresh to render the new pins
  };

  clearPins(newPin) {
    this.state.pins = [];  // reset the pins
    this.forceUpdate();  // unrender the pins
  };

  render() {
    return(
      <View style={styles.container}>
        <MapView style={styles.map} 
          showsUserLocation={true}
          showsMyLocationButton={false}   
          followsUserLocation={false} 
          /> 
      </View> 
    );
  }
};
class ConfirmButton extends Component {
  render() {
    return <View style={styles.container}>
              <TouchableOpacity style={styles.button} onPress={onConfirm}>
                <Text>Confirm</Text>
              </TouchableOpacity>
            </View>;
  }
}

export class StartRoute extends Component {state = { locations : [] }

  constructor(props) {
    super(props);
    this.updateLocations = this.updateLocations.bind(this);
  }

  updateLocations(value) {
    getLocation()
        .then(location => {
        getNearbyLocations(value, location.coords.latitude, location.coords.longitude)
        .then((response) =>  {
          this.setState({
            locations: response.results
          });
        })
        .catch((response) => console.log(response));
        }).catch((response) => console.log(response));
  }

  render( props ) {

    return (
      <SafeAreaView style={styles.container}>
        <View height={100}> 
          <Text style={{ textAlign: 'center'}} backgroundColor={"black"}>Set Destination</Text>
          
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this.props.navigation.navigate('options')}>
            <Text style={styles.loginText}>Options</Text>
          </TouchableOpacity>

          <View alignItems={"center"}>
            <DestinationSearch callback={this.updateLocations}/>
          </View>
        </View>
        <LocationSuggestions locations={this.state.locations}/>
        <Map />
        <View style= {{position: 'absolute', bottom: "10%", width:"100%"}} alignItems={"center"}> 
          <ConfirmButton/>
        </View>
      </SafeAreaView>
      );
  }
}