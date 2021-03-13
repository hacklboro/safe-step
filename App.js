import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import React, { Component } from "react";
import { Login, Sign_Up } from "./components/login/login.js"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="signUp" component={Sign_Up} options={{ title: 'Sign Up' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
