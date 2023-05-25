import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  TextInput,
} from "react-native";
/* import { findUserByName } from "../database/database";

class LoginScreen extends Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  tryLogin() {
    if (!this.state.username) {
      this.setState({ error: "Introduce nombre de usuario" });
      return;
    }
    if (!this.state.password) {
      this.setState({ error: "Introduce contraseña" });
      return;
    }

    let user = findUserByName(this.state.username);

    if (!user) {
      this.setState({ error: "Usuario o contraseña incorrectos" });
      return;
    }

    if (user.password !== this.state.password) {
      this.setState({ error: "Usuario o contraseña incorrectos" });
      return;
    }
  }

  showError() {
    if (this.state.error) {
      return <Text style={{ color: "red" }}>{this.state.error}</Text>;
    } else {
      return;
    }
  }

  render() {
    const navigation = this.props.navigation;

    const goToArticlesScreen = () => {
      navigation.navigate("Articles");
    };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <ImageBackground
            style={{ height: "100%", width: "100%" }}
            source={require("../assets/imgs/header.jpg")}
          >
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Login</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.form}>
          <Image
            style={styles.inputIcon}
            source={require("../assets/nuk-icons/png/2x/single-02@2x.png")}
          />
          <TextInput
            placeholder="Usuario"
            placeholderTextColor={"#898b8e"}
            onChangeText={(username) => {
              this.setState({ username });
            }}
          />
          <View style={styles.inputView}>
            <Image
              style={styles.inputIcon}
              source={require("../assets/nuk-icons/png/2x/key-25@2x.png")}
            />
            <TextInput
              placeholder="Contraseña"
              placeholderTextColor={"#898b8e"}
              secureTextEntry={true}
              onChangeText={(password) => {
                this.setState({ password });
              }}
            />
          </View>
          <TouchableHighlight
            style={styles.inputSubmit}
            onPress={() => this.tryLogin()}
          >
            <Text style={{ color: "white" }}>Iniciar Sesión</Text>
          </TouchableHighlight>

          <View style={{ flexDirection: "row" }}>
            <Text>¿Todavía no tienes cuenta?</Text>
            <Text
              style={{ color: "blue", textDecorationLine: "underline" }}
              onPress={() => navigation.navigate("Registro")}
            >
              Regístrate
            </Text>
          </View>
          {this.showError()}
        </View>
        </SafeAreaView> */

        class LoginScreen extends Component {
          render() {
            const navigation = this.props.navigation;
        
            const goToArticlesScreen = () => {
              navigation.navigate("Articles");
            };
            return (

        <View style={styles.buttonContainer}>
          <Text style={styles.textTitle}></Text>
          <TouchableOpacity style={styles.button} onPress={goToArticlesScreen}>
            <Text style={styles.buttonText}>Ir a la pantalla de artículos</Text>
          </TouchableOpacity>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
  },
  form: {
    paddingVertical: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerView: {
    width: "100%",
    height: 220,

    alignItems: "center",
    zIndex: 50,
  },
  headerContainer: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    backgroundColor: "#444c6d",

    alignItems: "center",
    justifyContent: "center",

    position: "relative",

    top: 160,
    alignSelf: "center",
  },
  header: {
    color: "white",
    fontSize: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: "75%",
  },
  inputView: {
    marginVertical: 10,

    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 100 / 2,

    width: "80%",

    backgroundColor: "#e6e6e6",

    flexDirection: "row",
  },
  inputSubmit: {
    marginVertical: 10,

    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 100 / 2,
    width: "80%",
    backgroundColor: "#444c6d",
    alignItems: "center",
  },
  inputIcon: {
    height: 25,
    width: 25,

    marginHorizontal: 9,
  },
  button: {
    backgroundColor: "#2f4f4f",
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LoginScreen;
