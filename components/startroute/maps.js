import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapContainer: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,   
  },
});

class Map extends Component {
  render() {
    return(
      <View style={styles.mapContainer}>
        <MapView style={styles.map} 
          showsUserLocation={true}
          //showsMyLocationButton={true}   
          followsUserLocation={true} 
          /> 
      </View> 
    );
  }
}

export const startRoute = () => {
  return (
    <View style={styles.container}>
      <View height={500}>
        <Text backgroundColor={"black"}>Set Destination</Text>
      </View>
      <Map />
    </View>
    );
};