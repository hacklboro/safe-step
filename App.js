import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-community/google-signin';
import Login from './components/Login.js';
import Sign_Up from './components/Sign_Up.js';

const Stack = createStackNavigator();
export default class App extends Component {

  this.homeStack = () => 
  <Stack.navigator>
    <Stack.screen name="Home" component={Login}></Stack.screen>
    <Stack.screen name="Home" component={Sign_Up}></Stack.screen>

  </Stack.navigator>
  render() {
    return (
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    )
  }
}

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Login />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
