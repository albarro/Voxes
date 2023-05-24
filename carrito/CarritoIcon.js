import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
} from "react-native";
import Badge from "@mui/material/Badge";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "../styles";
import CarritoPage from "./CarritoPage";

const Redirect = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => navigation.navigate("CarritoPage")}>
        {/* Actualizar badgeContent con la funcion que cuente los articulos en el carro */}
        <Badge badgeContent={4} color="primary">
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/shopping-cart.png")}
          />
        </Badge>
      </TouchableHighlight>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const CarritoIcon = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CarritoIcon">
        <Stack.Screen name="CarritoIcon" component={Redirect} />
        <Stack.Screen name="CarritoPage" component={CarritoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default CarritoIcon;
