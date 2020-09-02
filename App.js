import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";

//API DATOS https://jsonplaceholder.typicode.com/users
// API IMAGES https://placekitten.com/
export default function App() {
  const crearDialogo = ()=> Alert.alert(
    'Titulo',
    'Cuerpo Mensaje',
    [
      {
        text: 'Cancelar',
        onPress: ()=>{},
        style: "cancel", 
      },
      {
        text: 'Aceptar',
        onPress: ()=> console.log('Boton Presionado'),
      }
    ],
    {
      cancelable: false,
    },
    )

  return (
    <View style={styles.container}>
      <Button title="Abrir Dialogo" onPress={crearDialogo}></Button>
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
