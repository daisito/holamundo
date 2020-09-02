import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Modal, Text, Button } from "react-native";

//API DATOS https://jsonplaceholder.typicode.com/users
// API IMAGES https://placekitten.com/
export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modal}>
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>Soy Modal</Text>
            <Button title="Cerrar Modal" onPress={()=> setModal(!modal)}></Button>
          </View>
        </View>
      </Modal>
      <Text>No soy el Modal</Text>
      <Text>No soy el Modal</Text>
      <Text>No soy el Modal</Text>
      <Text>No soy el Modal</Text>
      <Text>No soy el Modal</Text>
      <Button title="Abrir Modal" onPress={()=> setModal(!modal)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  content:{
    backgroundColor: '#eee',
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
    margin: 25,
  },
  center:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent : 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22,
  },
});
