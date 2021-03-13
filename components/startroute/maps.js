import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
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
    height: '100%'
  },
});

const DestinationSearch = () => {
  return (
    <TextInput 
      style={{ marginTop: 20, borderBottomWidth: 2, borderBottomColor: "gray" }}
      placeholder={"Destination"} 
      width={"80%"} 
      onChangeText = {(value) => {
        getLocation()
        .then(location => {
        getNearbyLocations(value, location.coords.latitude, location.coords.longitude)
        .then((response) =>  {
            console.log(response);
        })
        .catch((response) => console.log(response));
        }).catch((response) => console.log(response));
      }}
      />
  );
};

class Map extends Component {
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
}

class ConfirmButton extends Component {
  render() {
    return <View style={styles.container}>
              <TouchableOpacity style={styles.button} onPress={console.log("Pressed")}>
                <Text>Confirm</Text>
              </TouchableOpacity>
            </View>;
  }
}

export const startRoute = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View height={100}> 
        <Text style={{ textAlign: 'center'}} backgroundColor={"black"}>Set Destination</Text>
        <View alignItems={"center"}>
          <DestinationSearch />
        </View>
      </View>
      <Map />
      <View style= {{position: 'absolute', bottom: "10%", width:"100%"}} alignItems={"center"}> 
        <ConfirmButton/>
      </View>
    </SafeAreaView>
    );
};