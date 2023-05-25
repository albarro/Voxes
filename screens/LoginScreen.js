import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import { findUserByName } from "../database/database";

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

    findUserByName(this.state.username).then(
      //Busco al usuario en db
      (user) => {//Acabamos la búsqueda y continuamos
        if (!user) {
          this.setState({ error: "Usuario o contraseña incorrectos" });
          return;
        }

        if (user.password !== this.state.password) {
          this.setState({ error: "Usuario o contraseña incorrectos" });
          return;
        }

        navigation.navigate("Home");
      }
    );
  }

  showError() {
    if (this.state.error) {
      return <Text style={{ color: "red" }}>{this.state.error}</Text>;
    } else {
      return;
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <ImageBackground
            style={{ height: "100%", width: "100%" }}
            source={require("../assets/header.jpg")}
          >
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Login</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.form}>
          <View style={styles.inputView}>
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
          </View>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
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
});

export default LoginScreen;
