import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Icon } from 'react-native';
import 'react-native-gesture-handler';


const Login = () => {
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
      
    </View>
  );
}

const styles = StyleSheet.create({
});

export default Login;
