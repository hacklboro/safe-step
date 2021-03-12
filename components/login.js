import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Icon } from 'react-native';
// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
//   } from '@react-native-community/google-signin';
import 'react-native-gesture-handler';

const Login = () => {
  
  // const navigation = useNavigation();

  return (
    <View style={styles.Login}>
      <Text style={styles.logo}>SafeSteps</Text>

      <View style={styles.inputView}>
        {/* <Icon style={styles.searchIcon} name="" size={20} color="#000"/> */}
        <TextInput
          style={styles.innerInput}
          placeholder="Email."
          onChangeText={(email) => setEmail(email)}
          placeholderTextColor="#ddd"
        />
      </View>

      <View>
        {/* <Icon style={styles.searchIcon} name="" size={20} color="#000"/> */}
        <TextInput
          style={styles.innerInput}
          placeholder="Password."
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          placeholderTextColor="#ddd"
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}
      onPress={() => console.log("touchable opacity pressed")}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}
      onPress={() => console.log("touchable opacity pressed") }>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  Login: {
    flex: 1,
    backgroundColor: '#6ce3f0',
  },
  logo: {
    color: 'black',
    fontSize: 50,
    textAlign: 'center',  
    justifyContent: 'center',
    marginTop: "60%"
  },
  inputView: {
    marginTop: '5%',
  },
  innerInput: {
    color: '#000',
    width: '80%',
    fontSize: 20,
    marginTop: '2%',
    alignSelf:'center',
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
  },
  forgot_button: {
    marginTop: '5%',
    alignSelf: 'center',
  },
  loginBtn: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    width: "65%",
    marginTop: '5%',
    marginBottom: '2.5%',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,},
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',  
    justifyContent: 'center',
    padding: 10,
  }

});

export default Login;
