import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
  ScrollView,
  FlatList,
  SectionList,
} from "react-native";

// const Texto = ({ style }) => {
//   const [texto, setTexto] = useState("Hola Mundo!");
//   const actualizarTexto = () => {
//     setTexto("Chau Mundo Cruel");
//   };
//   return (
//     <Text style={[styles.text, style]} onPress={actualizarTexto}>
//       {texto}
//     </Text>
//   );
// };



const { width, heigth } = Dimensions.get("window");
export default function App() {
  // const [text, setText] = useState("ORIENTE PETROLERO");
  // const [submit, setSubmit] = useState("");
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data=>{
      setUsers(data)
      setLoading(false)
    })
  },[])

  if(loading){
    return <View style={styles.center}><Text>Cargando...</Text></View>
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({item})=> <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item=> String(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
  center:{
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center',
  },
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22,
  },
  // scrollView :{
  //   width: width,
  // },
  item: {
    padding: 10,
    fontSize: 13,
    height: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  
});
