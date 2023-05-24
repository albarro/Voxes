import CarritoIcon from "./CarritoIcon";
import { View, Text, Image, Button } from "react-native";
import styles from "../styles";

const CarritoPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 350, height: 100 }}
        source={require("../assets/carrito.png")}
      />
      <View>
        <Text style={{ width: 300, fontWeight: "bold" }}>
          Total: {"\u0024"}
          {/* Dinero total aqui */}
          <Text>1000</Text>
        </Text>
        <Text style={{ fontWeight: "bold" }}>
          Cantidad de Items:
          {/* Cantidad total de productos aqui */}
          <Text></Text>
        </Text>
        <Text style={{ fontWeight: "bold" }}>Envio Gratis!</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ padding: 7 }}>
          <Button
            style={{ marginRight: 15 }}
            color="lightgreen"
            title="Comprar"
          />
        </View>
        <View style={{ padding: 7 }}>
          <Button
            style={{ marginLeft: 15 }}
            color="red"
            title="Vaciar carrito"
          />
        </View>
      </View>
      <View>
        {/* <Articulo /> */}
      </View>
    </View>
  );
};
export default CarritoPage;
