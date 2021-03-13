import * as Location from 'expo-location';
import React, {useState, useEffect} from 'react';
import { TWILIO_KEY } from '@env'

export function SendSMS(phoneNumber){
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
      var lng;
      var lat;

      for (let i = 0; i < text.length-9; i++) {
        if (text.substring(i, i+9) == "longitude") {
          for (let j = i; j < text.length-18; j++) {
            if (text.substring(j, j+1) == ",") {
              lng = text.substring(i, j);
              break;
            }
          }
          break;
        }
      }
  
      for (let i = 0; i < text.length-8; i++) {
        if (text.substring(i, i+8) == "latitude") {
          for (let j = i; j < text.length-16; j++) {
            if (text.substring(j, j+1) == ",") {
              lat = text.substring(i, j);
              break;
            }
          }
          break;
        }
      }
      
      const accountSid = "AC310bc9979e3f631c0b755fd3ae9ad711";
      const authToken = TWILIO_KEY;
      const client = require('twilio')(accountSid, authToken);
  
      client.messages
        .create({
          body: 'http://maps.google.com/?q=' + lat + ',' + lng,
          from: '+447782588090',
          to: phoneNumber
        })
        .then(message => console.log(message.sid));
    }
}
