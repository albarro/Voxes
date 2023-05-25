import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

class ArticlesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: null, articles: [], cart: [] };
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
        <Text style={styles.textTitle}>Articulos</Text>
        <View style={styles.categoryButtonsContainer}>
          <TouchableOpacity
            style={styles.categoryButton}
            onPress={() => this.selectCategory("Category1")}
          >
            <Text style={styles.categoryButtonText}>Categoria 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryButton}
            onPress={() => this.selectCategory("Category2")}
          >
            <Text style={styles.categoryButtonText}>Categoria 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryButton}
            onPress={() => this.selectCategory("Category3")}
          >
            <Text style={styles.categoryButtonText}>Categoria 3</Text>
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
    marginBottom: 10,
    color: "#2f4f4f",
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
});

export default ArticlesScreen;
