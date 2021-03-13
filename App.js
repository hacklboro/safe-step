import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';

import React, { Component } from "react";
import { Login, Sign_Up } from "./components/login/login.js"
import {StartRoute, Map} from "./components/startroute/maps.js";
import {DuringRoute} from "./components/duringroute/duringroute";
import {SaveContact} from "./components/options/contact.js";

const Stack = createStackNavigator(

);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="signUp" component={Sign_Up} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="routes" component={StartRoute} options={{ title: 'Routes' }} />
        <Stack.Screen name="options" component={SaveContact} options={{ title: 'Contacts' }} />
        <Stack.Screen name="duringroute" component={DuringRoute} options={{ title: 'During Route' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
