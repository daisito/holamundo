import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert, Dimensions, Button } from "react-native";
import {Camera} from  'expo-camera';
import * as Constants from  'expo-constants';

//API DATOS https://jsonplaceholder.typicode.com/users
// API IMAGES https://placekitten.com/
export default function App() {
  
  const [permisos, setPermisos] = useState(null)
  const [tipo, setTipo] = useState(Camera.Constants.Type.back)
  
  const getPermisos  = async ()=>{
    const {status} = await Camera.requestPermissionsAsync()
    setPermisos(status == 'granted')
    console.log(status);
  }

  useEffect(()=>{
    getPermisos()
  })
  if(permisos === null){
    return <View><Text>Esperando permisos...</Text></View>
  }
  if(permisos === false){
    return <View><Text>No tenemos accesos a la Camara...</Text></View>
  }
  return (
    <View style={styles.container}>
        <Camera style={styles.camera}
        type={tipo} >
          <Button style={styles.voltear} title="Voltear" onPress={()=>{
            const {front, back} = Camera.Constants.Type
            const nuevoTipo = tipo === back ? front : back
            setTipo(nuevoTipo)
          }}></Button>
        </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  
  camera : {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22,
  },
});

