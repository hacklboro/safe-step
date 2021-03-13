import { StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Text, View, Button, TextInput } from 'react-native';
import React, { useState, useRef } from "react";
import { openDatabase } from 'expo-sqlite';
import PhoneInput from "react-native-phone-number-input";

export function SaveContact() {

    const [name, onChangeText] = React.useState(null);
    const [number, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const phoneInput = useRef<PhoneInput>(null);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.phone}>
          <SafeAreaView style={styles.wrapper}>
            <TextInput
              style={styles.name}
              onChangeText={onChangeText}
              value={name}
              placeholder="Name"
            />
            <PhoneInput
              defaultValue={number}
              defaultCode="GB"
              layout="first"
              keyboardType="numeric"
              onChangeText={(text) => {
                setValue(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              withDarkTheme
              withShadow
              autoFocus
            />
            <TouchableOpacity>
              <Button
                  title="Save"
                  onPress={Save(name, number)}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </>
    );
}

function Save(name, number){
    var db = openDatabase("contacts.db", "1.0", "Demo", -1);
    db.transaction((tx) => {
        tx.executeSql('INSERT INTO table (name,number) VALUES( '+name+','+number+');', [], (tx, results) => {});
      });
}

const styles = StyleSheet.create({
  phone: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  name:{
    height: 45,
    borderWidth: 1,
    borderColor: '#eee',
    width: '100%',
  },
});