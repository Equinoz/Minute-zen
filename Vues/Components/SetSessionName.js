// Component permettant de modifier le nom de la séance

import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import PropTypes from "prop-types";

class SetSessionName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // Peut-être qu'on sera emmerdés ici plus tard et qu'il faudra passer par une fonction de cycle de vie du component
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.label }>Indiquez le nom de la séance</Text>
        <TextInput style={ styles.input } onChangeText={ text => this.setState({ name: text }) } placeholder="10 lettres max" maxLength={10} />
        <CustomButton title="Valider" callback={() => this.props.callback(this.state.name) } />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  label: {
    marginTop:10,
    marginBottom: 10,
    fontSize: 18
  },
  input: {
    backgroundColor: "#f7f6ea",
    height: 40,
    width: 220,
    marginBottom: 15,
    textAlign: "center",
    borderRadius: 10,
    fontSize: 20
  }
});

SetSessionName.propTypes = {
  callback: PropTypes.func.isRequired
}

export default SetSessionName;