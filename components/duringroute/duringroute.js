import React, { Component, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { JourneyTime } from './stopwatch.js';

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

class Map extends Component { state = { mapPins: [] }

  constructor(props) {
    super(props);
    this.addPin = this.addPin.bind(this);
  }

  addPin(lat, long) {
    if (lat && long) {  // to stop some undefined calls
      this.state.mapPins = [[lat, long]];
      this.forceUpdate();
    } 
  };

  componentDidMount() {
    this.props.onRef(this)
  }
  
  render() {
    return(
      <View style={styles.container}>
        <MapView style={styles.map} 
          showsUserLocation={true}
          showsMyLocationButton={false}   
          followsUserLocation={false} 
          >
            {this.state.mapPins.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{latitude : marker[0] , longitude : marker[1] }}
            />
          ))}
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

export class DuringRoute extends Component {state = { route: [], endPoint: []}

  constructor(props) {
    super(props);
    this.state.endPoint = props.route.params.destination;
    this.render = this.render.bind(this);
  }

  render( props ) {
    return (
      <SafeAreaView style={styles.container}>
        <View height={100}> 
        <Text style={{ textAlign: 'center'}} backgroundColor={"black"}>Current Journey</Text>
        <JourneyTime style={styles.container}/>
        </View>
        <Map onRef={ref => (this.child = ref)} pins={this.state.mapPins}/>
        <View style= {{position: 'absolute', bottom: "10%", width:"100%"}} alignItems={"center"}> 
          <CancelButton/>
        </View>
      </SafeAreaView>
      );
  }
}