import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";



class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    


    return (
      <ImageBackground
        source={require("../assets/imgs/bg.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.textTitle}>BOXES</Text>
          <Text style={styles.centeredText}>Compra lo que necesites</Text>
       
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Registro")}
          >
            <Text style={styles.buttonText}>Crear Cuenta</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#f0fff0",
  },
  centeredTextContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  centeredText: {
    fontSize: 20,
    marginBottom: 20,
    color: "white",
  },
  buttonContainer: {
    marginTop: 20,
    width: '75%',
  },
  button: {
    backgroundColor: "#2f4f4f",
    paddingHorizontal: 20,
    paddingVertical: 10,
    height:40,
    borderRadius: 20,
    marginBottom:10,
    width: '100%',
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity:0.9,
  },
});

export default HomeScreen;
