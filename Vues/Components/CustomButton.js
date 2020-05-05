// Bouton personnalisé

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <TouchableOpacity style={ styles.back_button } onPress={ this.props.callback }>
        <Text style={ styles.text_back_button }>{ this.props.title }</Text>
      </TouchableOpacity>
    )
  }
};

const styles = StyleSheet.create({
  back_button: {
    backgroundColor: "#215771",
    height: 50,
    width: 115,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    elevation: 3
  },
  text_back_button: {
    fontSize: 25
  }
});

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
}

export default CustomButton;