import * as Location from 'expo-location';
import React, {useState, useEffect} from 'react';

function SendSMS(phoneNumber){
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
  
      const accountSid = "AC310bc9979e3f631c0b755fd3ae9ad711";
      const authToken = "7cae1329d22dc7f789ffbf2855b90076";
      const client = require('twilio')(accountSid, authToken);
  
      client.messages
        .create({
          body: 'http://maps.google.com/?q=' + text.substring(22, 30) + ',' + text.substring(44, 53),
          from: '+447782588090',
          to: phoneNumber
        })
        .then(message => console.log(message.sid));
    }
}