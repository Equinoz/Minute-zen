// Vue permettant de créer une nouvelle séance

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import AddButton from "./AddButton";

class AddSession extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = { newSession: {} };
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>Nouvelle séance</Text>
        <AddButton text="Ajouter une période" callback={ () => console.log("ajout de période") } />
        <AddButton text="test session en cours" callback={ () => console.log(this.state.newSession) } />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#61867e",
    alignItems: "center"
  }
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(AddSession);