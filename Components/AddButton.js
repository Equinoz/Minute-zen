// Bouton d'ajout

import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";

class AddButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={ styles.add_new_element } onPress={ () => this.props.callback() }>
        <Image
          style={ styles.image }
          source={ require("../pictures/add.png") }
        />
        <Text style={ styles.text_new_element }>{ this.props.text }</Text>
      </TouchableOpacity>
    )
  }
};

const styles = StyleSheet.create({
  add_new_element: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  image: {
    height: 30,
    width: 30
  },
  text_new_element: {
    paddingLeft: 10,
    fontSize: 20,
    color: "#0e211f"
  }
});

export default AddButton;