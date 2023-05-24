import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    Linking,
    ImageBackground,
  } from "react-native";
  
  export default function Login() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <ImageBackground
            style={{ height: "100%", width: "100%" }}
            source={require("./assets/header.jpg")}
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
              source={require("./assets/nuk-icons/png/2x/single-02@2x.png")}
            />
            <TextInput placeholder="Usuario" placeholderTextColor={"#898b8e"} />
          </View>
          <View style={styles.inputView}>
            <Image
              style={styles.inputIcon}
              source={require("./assets/nuk-icons/png/2x/key-25@2x.png")}
            />
            <TextInput
              placeholder="Contraseña"
              placeholderTextColor={"#898b8e"}
              secureTextEntry={true}
            />
          </View>
          <TouchableHighlight style={styles.inputSubmit}>
            <Text style={{ color: "white" }}>Iniciar Sesión</Text>
          </TouchableHighlight>
  
          <View style={{ flexDirection: "row" }}>
            <Text>¿Todavía no tienes cuenta?</Text>
            <Text
              style={{ color: "blue", textDecorationLine: 'underline' }}
              onPress={() => Linking.openURL("http://google.com")}
            >
              Regístrate
            </Text>
          </View>
        </View>
      </View>
    );
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
  