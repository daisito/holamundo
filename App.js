import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import * as Location from  'expo-location';
import * as Constants from  'expo-constants';

//API DATOS https://jsonplaceholder.typicode.com/users
// API IMAGES https://placekitten.com/
export default function App() {
  
  const buscaLocation = async ()=>{
    const {status} = await Location.requestPermissionsAsync()
    if(status !== 'granted'){
      return Alert.alert('No tenemos los permisos necesarios para acceder a la locacion')
    }
    const location = await Location.getCurrentPositionAsync({})
    console.log(location);
  }

  useEffect(()=>{
    buscaLocation()
  })
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22,
  },
});
