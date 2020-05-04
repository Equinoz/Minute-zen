// Bouton de retour à la vue précédente

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class BackButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <TouchableOpacity style={ styles.back_button } onPress={ () => this.props.navigation.goBack() }>
        <Text style={ styles.text_back_button }>Retour</Text>
      </TouchableOpacity>
    )
  }
};

const styles = StyleSheet.create({
  back_button: {
    backgroundColor: "#215771",
    height: 60,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 30,
    elevation: 3
  },
  text_back_button: {
    fontSize: 25
  }
});

export default BackButton;