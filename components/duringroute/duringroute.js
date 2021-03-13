import React, { Component, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
<<<<<<< HEAD
import { JourneyTime } from './stopwatch.js';
=======
import { getLocation, generatePath } from "../location-management/location-manager.js";
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_KEY } from '@env'
import Polyline from "@mapbox/polyline";
>>>>>>> 79103285f48898f83d227cedc3b712bd71fb8333

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
    backgroundColor: "#7CC0FF",
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

class Map extends Component { state = { mapPins: [], polyline: [], destination: []}

  constructor( props ) {
    super( props );
    this.addPin = this.addPin.bind(this);
    this.setLine = this.setLine.bind(this);
    this.setDestination = this.setDestination.bind(this);
  }

  setDestination(dest) {
      this.state.destination = dest;
  };

  addPin(lat, long) {
    if (lat && long) {  // to stop some undefined calls
      this.state.mapPins = [[lat, long]];
      this.forceUpdate();
    } 
  };

  setLine(lines) {
      this.state.polyline = lines;
      this.forceUpdate();
  }

  componentDidMount() {
    this.props.onRef(this)
  }
  
  render() {
    let origin = {longitude: this.props.origin[0], latitude: this.props.origin[1]};
    let destination = {latitude: this.props.destination[0], longitude: this.props.destination[1]};
    console.log(origin);
    console.log(destination);
    return(
      <View style={styles.container}>
        <MapView style={styles.map} 
          showsUserLocation={true}
          showsMyLocationButton={false}   
          followsUserLocation={false} 
          >
              <MapViewDirections 
              origin = {origin}
              destination = {destination}
              apikey = {GOOGLE_KEY}
              />
          </MapView>
      </View> 
    );
  }
};

class CancelButton extends Component {
  render() {
    return <View style={styles.container}>
              <TouchableOpacity style={styles.button} onPress={() => console.log("Finish  Journey")}>
                <Text>Finish Journey</Text>
              </TouchableOpacity>
            </View>;
  }
}

export class DuringRoute extends Component {state = { route: [], endPoint: [null,  null], origin: [null, null]}

  constructor(props) {
    super(props);
    this.state.endPoint = props.route.params.destination;
    this.state.origin = props.route.params.origin;
    this.render = this.render.bind(this);
    this.setRoute = this.setRoute.bind(this);
    
    let endPoint = this.state.endPoint;
    getLocation().then(location => {
        generatePath(location, endPoint).then(path => this.setRoute(path)).catch(error => console.log(error))
    }).catch(error => alert(error));
  }

  setRoute = ( route )=> {
      let lines = [];
      let steps = route.routes[0].legs[0].steps;
      steps.forEach(step => {
        lines.push(...Polyline.decode(step.polyline.points));
      });

      lines.forEach((line, index) => {
          lines[index] = {longitude: line[0], latitude: line[1]};
      })
      
      this.route = lines;
      this.child.setLine(this.route);
  };

  render( props ) {
    return (
      <SafeAreaView style={styles.container}>
        <View height={100}> 
        <Text style={{ textAlign: 'center'}} backgroundColor={"black"}>Current Journey</Text>
        <JourneyTime style={styles.container}/>
        </View>
        <Map onRef={ref => (this.child = ref)} pins={this.state.mapPins} origin={this.state.origin} destination={this.state.endPoint} />
        <View style= {{position: 'absolute', bottom: "10%", width:"100%"}} alignItems={"center"}> 
          <CancelButton/>
        </View>
      </SafeAreaView>
      );
  }
}