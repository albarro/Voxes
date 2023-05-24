import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import CarritoIcon from "./carrito/CarritoIcon";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <CarritoIcon />
    </View>
  );
};

export default App;
