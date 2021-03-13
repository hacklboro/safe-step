import * as Location from 'expo-location';
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
