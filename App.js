import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert, Dimensions } from "react-native";
import MapView, {Marker} from 'react-native-maps';
import * as Location from  'expo-location';
import * as Constants from  'expo-constants';

//API DATOS https://jsonplaceholder.typicode.com/users
// API IMAGES https://placekitten.com/
export default function App() {
  const [locacion, setLocacion] = useState({})
  const buscaLocation = async ()=>{
    const {status} = await Location.requestPermissionsAsync()
    if(status !== 'granted'){
      return Alert.alert('No tenemos los permisos necesarios para acceder a la locacion')
    }
    const location = await Location.getCurrentPositionAsync({})
    setLocacion(location)
  }

  useEffect(()=>{
    buscaLocation()
  })
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {locacion.coords
          ? <Marker
          coordinate={locacion.coords}
          title="Titulo"
          description="Descripcion del punto" />
          :null
        }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22,
  },
});
