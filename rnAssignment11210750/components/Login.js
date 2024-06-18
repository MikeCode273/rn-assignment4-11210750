import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigation = useNavigation();
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

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Dasboard")}
            >
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.nin}>
        <View style={styles.dash1}></View>
        <View>
          <Text> Or continue with </Text>
        </View>
        <View style={styles.dash2}></View>
      </View>
      <View style={styles.roew}>
        <View>
          <Image
            style={{
              backgroundColor: "#fff",
              width: 30,
              height: 30,
              marginLeft: 30,
              marginTop: 10,
              borderRadius: 10,
            }}
            source={require("../assets/Group 54.png")}
          />
        </View>
        <View>
          <Image
            style={{
              backgroundColor: "#fff",
              width: 30,
              height: 30,
              marginLeft: 30,
              marginTop: 10,
              borderRadius: 10,
            }}
            source={require("../assets/Group 55.png")}
          />
        </View>
        <View>
          <Image
            style={{
              backgroundColor: "#fff",
              width: 30,
              height: 30,
              marginLeft: 30,
              marginTop: 10,
              borderRadius: 10,
            }}
            source={require("../assets/Group 56.png")}
          />
        </View>
      </View>
      <View style={styles.later}>
        <View>
          <Text> Havent register yet?</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={{ color: "dark blue" }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
  dash1: {
    height: 1,
    borderWidth: 1,
    width: 130,
    borderBlockColor: "gray",
  },
  dash2: {
    height: -1,
    borderWidth: 1,
    width: 130,
    borderBlockColor: "gray",
  },
  nin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  roew: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  later: {
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 128,
  },
});

export default Login;