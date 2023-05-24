import React, { Component } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistroScreen from "./screens/RegistroScreen";
import ArticlesScreen from './screens/ArticlesScreen';

const Stack = createNativeStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Go Shopping",
              headerStyle: {
                backgroundColor: "#2f4f4f",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{
              title: "Login",
              headerStyle: {
                backgroundColor: "#2f4f4f",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
           />
          <Stack.Screen 
          name="Registro" 
          component={RegistroScreen} 
          options={{
              title: "Registro",
              headerStyle: {
                backgroundColor: "#2f4f4f",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}

          />
             <Stack.Screen 
             name="Articles" 
             component={ArticlesScreen} 
             options={{
              title: "Articulos",
              headerStyle: {
                backgroundColor: "#2f4f4f",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
             />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
