import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text
} from "react-native";


//API DATOS https://jsonplaceholder.typicode.com/users
// API IMAGES https://placekitten.com/
export default function App() {
  

  return (  
    <View style={styles.container}>
        <ImageBackground
          style={styles.photo}
          source={{uri:'https://placekitten.com/200/200'}}
        >
        <Text>DASD</Text>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  
  photo:{
    height: 200,
    width: 200,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22,
  },
  
  
});
