import CarritoIcon from "./CarritoIcon";
import { View, Text, Image, Button } from "react-native";
import styles from "../styles";
import Articulos from "../Articulos";
import { QuantityPicker } from "react-qty-picker";

const CarritoPage = () => {
  const articulo1 = Articulos.filter((articulo1) => articulo1.id === 1);
  const articulo2 = Articulos.filter((articulo2) => articulo2.id === 10);

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 350, height: 100 }}
        source={require("../assets/carrito.png")}
      />
      <View>
        <Text style={{ width: 300, fontWeight: "bold", alignText: "center" }}>
          Total: {"\u0024"}
          <Text> {articulo1[0].precio + articulo2[0].precio}</Text>
        </Text>
        <Text style={{ fontWeight: "bold" }}>
          Cantidad de Items:
          {/* Cantidad total de productos aqui */}
          <Text></Text>
        </Text>
        <Text style={{ fontWeight: "bold", alignText: "center" }}>
          Envio Gratis!
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ padding: 7 }}>
          <Button style={{ marginRight: 15 }} color="#506c96" title="Comprar" />
        </View>
        <View style={{ padding: 7 }}>
          <Button
            style={{ marginLeft: 15, marginBottom: 15 }}
            color="#b52b2b"
            title="Vaciar carrito"
          />
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          border: "dashed",
          width: 300,
        }}
      />
      <View style={{ flexDirection: "row", marginRight: 100 }}>
        <View style={{ padding: 5 }}>
          <Image
            source={articulo1[0].imagen}
            style={{ width: 50, height: 50, alignItems: "left" }}
          />
        </View>
        <View style={{ padding: 5 }}>
          <Text>{articulo1[0].nombre}</Text>
          <Text>{articulo1[0].categoria}</Text>
          <Text>
            <Text>{"\u0024"}</Text>
            {articulo1[0].precio}
          </Text>
        </View>
        <View style={{ padding: 5 }}>
          <QuantityPicker
            value={1}
            minValue={1}
            maxValue={10}
            onValueChange={(value) => console.log("Selected value:", value)}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", marginRight: 100 }}>
        <View style={{ padding: 5 }}>
          <Image
            source={articulo2[0].imagen}
            style={{ width: 50, height: 50, alignItems: "left" }}
          />
        </View>
        <View style={{ padding: 5 }}>
          <Text>{articulo2[0].nombre}</Text>
          <Text>{articulo2[0].categoria}</Text>
          <Text>
            <Text>{"\u0024"}</Text>
            {articulo2[0].precio}
          </Text>
        </View>
        <View style={{ padding: 5 }}>
          <QuantityPicker
            value={1}
            minValue={1}
            maxValue={10}
            onValueChange={(value) => console.log("Selected value:", value)}
          />
        </View>
      </View>
    </View>
  );
};
export default CarritoPage;
