import CarritoIcon from "./CarritoIcon";
import { View, Text, Image, Button } from "react-native";
import styles from "../styles";

const CarritoPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 300, height: 300, marginLeft: 15 }}
        source={require("../assets/carrito.png")}
      />
      <View>
        <Text>
          Total: {"\u0024"}
          {/* Dinero total aqui */}
          <Text>1000</Text>
        </Text>
        <Text>
          Cantidad de Items:
          {/* Cantidad total de productos aqui */}
          <Text></Text>
        </Text>
        <Text>Envio Gratis!</Text>
      </View>
      <View>
        <Button title="Comprar" />
        <Button title="Vaciar carrito" />
      </View>
    </View>
  );
};
export default CarritoPage;
