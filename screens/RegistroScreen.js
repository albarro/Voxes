import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

class RegistroScreen extends Component {
  render() {
    const navigation=this.props.navigation;

    const goToLoginScreen=()=>{
        navigation.navigate('Login');
    }
    return (
        <View style={styles.buttonContainer}>
        <Text style={styles.textTitle}></Text>
        <TouchableOpacity  style={styles.button} onPress={goToLoginScreen}>
          <Text style={styles.buttonText}>Ir a la pantalla de Login</Text>
        </TouchableOpacity>
      </View>
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
      flex: 1,
      fontSize: 24,
      fontWeight: "bold",
    },
    buttonContainer: {
      marginTop: 20,
      width: "75%",
    },button: {
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
export default RegistroScreen;