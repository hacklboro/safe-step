import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Login = () => {
  return (
    <View style={styles.Login}>
      <Text style={styles.text}>SafeSteps</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Login: {
    flex: 1,
    backgroundColor: '#3ec1cf',
  },
  test: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center'
  },
});

export default Login;
