import React, { Component } from 'react';
import { AppRegistry, StyleSheet,Text,View, TouchableHighlight } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
 

const options = {
    container: {
      backgroundColor: '#7CC0FF',
      padding: 20,
      borderRadius: 5,
      width: 220,
    },
    text: {
      fontSize: 14,
      color: '#FFF',
      marginLeft: 7,
    }
  };

export class JourneyTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatchStart: true, // starts stopwatch when the page is loaded
      totalDuration: 90000,
      stopwatchReset: false,
    };
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }
 
  resetStopwatch() {
    this.setState({stopwatchStart: false, stopwatchReset: true});
  }
  
  getFormattedTime(time) {
      this.currentTime = time;
  };
 
  render() {
    return (
      <View>
        <Stopwatch laps msecs start={this.state.stopwatchStart}
          laps={false}
          msecs={false}
          reset={this.state.stopwatchReset}
          options={options}
          getTime={this.getFormattedTime} />
      </View>
    );
  }
}
