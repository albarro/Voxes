import React, { Component } from "react";
import {View,Text,StyleSheet} from 'react-native';

class RegistroScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>RegistroScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    textTitle: {
      flex: 1,
      fontSize: 24,
      fontWeight: "bold",
    },
  });
export default RegistroScreen;