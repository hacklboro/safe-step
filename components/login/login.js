import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Icon,
  SafeAreaView,
} from "react-native";
import React, { Component } from "react";
import * as Animatable from "react-native-animatable";
import { Blobs } from "./blobs.js" 
import Svg, {
  Path,
  Circle,
  Rect,
  Use,
  Defs,
  Pattern,
  Image,
} from "react-native-svg";
import { styles } from "./style.js" 

export function Login( props ) {

  return (
    <View style={styles.Login}>
      <Blobs />
      <Text style={styles.logo}>SafeSteps</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.innerInput}
          placeholder="Email."
          onChangeText={(email) => setEmail(email)}
          placeholderTextColor="#000"
        />
      </View>

      <View>
        <TextInput
          style={styles.innerInput}
          placeholder="Password."
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          placeholderTextColor="#000"
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => props.navigation.navigate('routes')}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => props.navigation.navigate('signUp')}
      >
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>

    </View>
  );
};

export function Sign_Up( props ) {
  return (
    <View style={styles.Login}>
      <Blobs />
      <Text style={styles.logo}>SafeSteps</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.innerInput}
          placeholder="Name."
          onChangeText={(email) => setEmail(email)}
          placeholderTextColor="#000"
        />

        <TextInput
          style={styles.innerInput}
          placeholder="Gender."
          onChangeText={(email) => setEmail(email)}
          placeholderTextColor="#000"
        />

        <TextInput
          style={styles.innerInput}
          placeholder="Email."
          onChangeText={(email) => setEmail(email)}
          placeholderTextColor="#000"
        />

        <TextInput
          style={styles.innerInput}
          placeholder="Password."
          secureTextEntry={true}
          onChangeText={(pwd) => setPassword(pwd)}
          placeholderTextColor="#000"
        />

        <TextInput
          style={styles.innerInput}
          placeholder="Password Repeat."
          secureTextEntry={true}
          onChangeText={(pwdR) => setPassword(pwdR)}
          placeholderTextColor="#000"
        />
      </View>

      <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => props.navigation.navigate('signUp')}
        >
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>

      <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => props.navigation.navigate('login')}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
  </View>
      
  );
}

