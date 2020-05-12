// Vue permettant de modifier le nom de la séance

import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { connect } from "react-redux";
import CustomButton from "./Components/CustomButton";

class SetSessionName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Fonction fléchée pour binder
  // Modifie le nom de la séance en cours
  _update_session_name = () => {
    let newName = this.state.name || this.props.updatingSession.name;
    let session = { ...this.props.updatingSession, name: newName}
    const action = { type: "UPDATE", value: session};
    this.props.dispatch(action);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.label }>
          { /* Attention ici la vieille props!!! */ (this.props.action == "create") ? "Indiquez le nom de la séance" : "Modifiez le nom de la séance" /* Attention ici la vieille props!!! */}
        </Text>
        <TextInput style={ styles.input } onChangeText={ text => this.setState({ name: text }) } defaultValue={ this.props.updatingSession.name } placeholder="10 lettres max" maxLength={10} />
        <CustomButton title="Valider" callback={ this._update_session_name } />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#61867e",
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

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(SetSessionName);