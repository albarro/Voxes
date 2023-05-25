import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import articlesData from '../database/articles.json';

class ArticlesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: null, articles: articlesData, cart: [] };// Asigna los datos del archivo articles.json al estado
  }
  //Metodo para seleccionar la categoria
  selectCategory(category) {
    this.setState({ selectedCategory: category });
  }

  render() {

    const { selectedCategory, articles } = this.state;

    //Filtrar los articulos por categoría seleccionada
    const filteredArticle = selectedCategory
      ? articles.filter((article) => article.category === selectedCategory)
      : [];
    //funcion para agregar un articulo al carrito
    const addToCart = (article) => {
      this.setState((prevState) => ({
        cart: [...prevState.cart, article],
      }));
    };
    return (
      <SafeAreaView style={styles.container}>
       
        <View style={styles.imageContainer}>
        <Image
          source={require('../assets/imgs/bg5.png')}
          style={styles.image}
        />
        </View>
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
          <View>
            <Text>Articulos por {selectedCategory}</Text>
            {/* Render the articles for the selected category */}
            {filteredArticle.map((article) => (
              <View key={article.id}>
                <Image
                  source={{ uri: article.image }}
                  style={styles.articleImage}
                />
                <Text>{article.nombre}</Text>
                <Text>{article.descripcion}</Text>
                <Text>{article.precio}</Text>
                <TouchableOpacity onPress={() => this.addToCart(article)}>
                  Agregar al carrito
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
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
  textTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop:40,
    marginBottom: 10,
    color: "#fff",
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
  imageContainer: {
    height: 50, // Ajusta la altura deseada
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 200,
  },
  image: {
    width: 320,
    height: 320,
    resizeMode: 'cover',
    opacity:0.7,
  },

});

export default ArticlesScreen;
