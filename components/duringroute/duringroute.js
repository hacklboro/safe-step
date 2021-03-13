import React, { Component, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { JourneyTime } from './stopwatch.js';
import { getLocation, generatePath } from "../location-management/location-manager.js";
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_KEY } from '@env'
import Polyline from "@mapbox/polyline";
import { SMS } from "../messaging/SMS.js";
import * as BackgroundFetch from "expo-background-fetch"
import * as TaskManager from "expo-task-manager"

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

function Intersect(startX,startY,endX,endY,locationX,locationY,radius) {

  let m = ((endY) - (startY))/((endX)-(startX)); // Gradient of the line
  let n = (startY) - (m * (startX)); // Y-intercept
  // Setting up discriminant
  let a = 1 + Math.pow((m),2);
  let b = -(locationX) * 2 + (m * (n - (locationY))) * 2;
  let c = Math.pow((locationX),2) + Math.pow((n - (locationY)),2) - Math.pow((radius),2);
  
  let d = Math.pow((b),2) - 4 * a * c; // Discriminant value
  if (d >= 0) {
      return true;
  }
  else{
      return false;
  }
}

function hasLeftCircle(currentLocation, points) {
  for (let index = 0; index < points.length-1; index++) {
    let startPoint = point[index];
    let endPoint = point[index+1];
    
    if (!Intersect(startPoint[0], startPoint[1], endPoint[0], endPoint[1], currentLocation[0], currentLocation[1], 0.0003)) return false;
  }
  return true; // user has left the circle and therefore need to message
}


const TASK_NAME = "RUN_CHECKS"

TaskManager.defineTask(TASK_NAME, (location, points) => {
  try {
    if (hasLeftCircle(location, points)) {
      sendMessages(this.state.user_id);
    }
  } catch (err) {
    return BackgroundFetch.Result.Failed
  }
});

RegisterBackgroundTask = async (points) => {
  try {
    await BackgroundFetch.registerTaskAsync("RUN_CHECKS", {
      minimumInterval: 30, // seconds,
    })
    console.log("Starting check loop");
  } catch (err) {
    console.log("Task Register failed:", err)
  }
}


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

  componentDidMount() {
    RegisterBackgroundTask();
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