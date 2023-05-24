import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import CarritoIcon from "./carrito/CarritoIcon";

const App = () => {
  return (
    <View style={styles.container}>
      <CarritoIcon />
    </View>
  );
};

export default App;
