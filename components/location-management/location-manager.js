import * as Location from 'expo-location';
import { GOOGLE_KEY } from '@env'

export const getLocation = async () => {

    let status = await Location.requestPermissionsAsync()
    
    if (status.granted === false) {
        console.log(status);
        console.error("Location permission to access location was denied");
        return;
    }
    
    let location = await Location.getCurrentPositionAsync({});
    return location;
    
};

export const generatePath = () => {
    return new Promise((resolve, reject) => {
        let url = "https://maps.googleapis.com/maps/api/place/textsearch/json?"
    
        //add query
        url += "query=" +query.toLowerCase().replace(" ", "+");  // convert to lower case and replace spaces with + symbols
        
        // add current position
        url += "&location="+ long + ","+lang;

        // add radius of places to list
        url += "&radius=" + radius;

        // add api key
        url += "&key=" +  GOOGLE_KEY;

        if (xhr) xhr.abort();  // stop any current requests
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();

        xhr.onreadystatechange = function () {
            // In local files, status is 0 upon success in Mozilla Firefox
            if(xhr.readyState === XMLHttpRequest.DONE) {
              var status = xhr.status;
              if (status === 0 || (status >= 200 && status < 400)) {
                // The request has been completed successfully
                return resolve(JSON.parse(xhr.responseText));
              } else {
                return reject(JSON.parse(xhr.responseText));
                // Oh no! There has been an error with the request!
              }
            }
          };
    });
};
