import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator
} from "react-native";



export default function App() {
  

  return (  
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff"/>
    </View>
  );
}

const styles = StyleSheet.create({
  
  photo:{
    height: 60,
    width: 60,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22,
  },
  
  
});
