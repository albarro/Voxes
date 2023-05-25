import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";

import articlesData from "../database/articles.json";

class ArticlesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: null, articles: articlesData, cart: [] }; // Asigna los datos del archivo articles.json al estado
  }
  //Metodo para seleccionar la categoria
  selectCategory(category) {
    this.setState({ selectedCategory: category });
  }

  render() {
    const { selectedCategory, articles } = this.state;

    //Filtrar los articulos por categoría seleccionada
    const filteredArticle = selectedCategory
      ? articles.filter((article) => article.categoria === selectedCategory)
      : [];
    console.log(selectedCategory);

    console.log(filteredArticle);
    //console.log(articles);

    //funcion para agregar un articulo al carrito
    const addToCart = (article) => {
      this.setState((prevState) => ({
        cart: [...prevState.cart, article],
      }));
    };
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../assets/imgs/bg5.png")}
          style={styles.backgroundImage}
        >
          <Text style={styles.textTitle}>Articulos</Text>
          <View style={styles.categoryButtonsContainer}>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={() => this.selectCategory("cuerda")}
            >
              <Text style={styles.categoryButtonText}>Cuerda</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={() => this.selectCategory("viento")}
            >
              <Text style={styles.categoryButtonText}>Viento</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={() => this.selectCategory("percusion")}
            >
              <Text style={styles.categoryButtonText}>Percusion</Text>
            </TouchableOpacity>
          </View>
          {selectedCategory && (
            <View style={styles.container}>
              <View style={styles.categoryHeader}>
                <Text style={styles.textTitle}>
                  Articulos de {selectedCategory}
                </Text>
              </View>
              {/* Render the articles for the selected category */}
              <View>
                {filteredArticle.map((article) => (
                  <View key={article.id} style={styles.textSubTitle}>
                    <Image
                      source={{ uri: article.image }}
                      style={styles.articleImage}
                    />
                    <Text>Nombre Articulo: {article.nombre}</Text>
                    <Text>Descripcion: {article.descripcion}</Text>
                    <Text>Precio: {article.precio} €</Text>
                    <TouchableOpacity  style={styles.button} onPress={() => this.addToCart(article)}>
                      <Text style={styles.buttonText}>Agregar al carrito</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          )}
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#2f4f4f",
    paddingHorizontal: 20,
    paddingVertical: 10,
    height:42,
    borderRadius: 20,
    margin:5,
    width: '100%',
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
  },
  textTitle: {
    fontSize: 26,
    fontWeight: "bold",
    paddingLeft: 25,
    marginTop: 5,
    marginBottom: 10,
    color: "#2f4f4f",
  },
  textSubTitle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 25,
    marginTop: 5,
    marginBottom: 10,
    color: "#ffffff80",
  },
  categoryButtonsContainer: {
    marginTop: 20,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  categoryButton: {
    backgroundColor: "#2f4f4f",
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
    alignItems: "center",
    flex: 1, // Para que los botones se ajusten automáticamente
    marginRight: 10, // Agregar espacio entre los botones
    justifyContent: "center",
  },
  categoryButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  categoryHeader: {
    alignItems: "center",
    marginTop: 10,
  },
  imageContainer: {
    height: 50, // Ajusta la altura deseada
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 200,
  },
  image: {
    width: 320,
    height: 320,
    resizeMode: "cover",
    opacity: 0.7,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 0.8,
    resizeMode: "cover",
  },
});

export default ArticlesScreen;
