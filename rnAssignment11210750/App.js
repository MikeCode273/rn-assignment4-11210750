import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, TextInput,TouchableOpacity } from 'react-native';
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <View>
        <Text style={styles.txt}>Jobizz</Text>
        <Text style={styles.bih}>Welcome Back 👋</Text>
        <Text style={styles.log}>Lets log in.Apply to jobs!</Text>
      </View>
     <View style={styles.form}>
     <TextInput
      style={styles.once}
      value={name}
      onChangeText={(text) => setEmail(text)}
      placeholder="  Name"
      />
      <TextInput
        style={styles.twice}
        value={email}
        onChangeText={(text) => setPassword(text)}
        placeholder="  Email"
        secureTextEntry={true}
      />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Dasboard")}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:'auto',
   
  },
  txt: {
    color: "#356899",
    fontSize: 24,
    marginTop: 80,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  bih: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  log: {
    color: "#cfcfcf",
    marginLeft: 12,
    fontSize: 15,
  },
  form: {
    marginTop: 80,
  },
  once: {
    marginTop: 50,
    height: 50,
    backgroundColor: "white",
    width: 310,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 35,
  },
  twice: {
    marginTop: 20,
    height: 50,
    backgroundColor: "white",
    width: 310,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 35,
  },
  button: {
    marginTop: 20,
    height: 50,
    backgroundColor: "#356899",
    width: 310,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});
