// Vue "Settings"

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import Radio from "./Components/Radio";
import CustomButton from "./Components/CustomButton";

class Settings extends React.Component {
  constructor(props) {
    super(props);

    // On converti la valeur de l'option retenue en entier, gérable par le component Radio
    let option;
    switch(this.props.option) {
      case "sound":
        option = 0;
        break;
      case "vibration":
        option = 1;
        break;
      default:
        option = 2;
    }

    this.state = { option: option };
  }

  // Fonction fléchée pour binder
  // Mise à jour de l'état global
  _switch_value = value => {
    let action;
    switch(value) {
      case 0:
        action = "sound";
        break;
      case 1:
        action = "vibration";
        break;
      default:
        action = "both";
    }
    this.setState({ option: value });
    this.props.dispatch({ type: "UPDATE", value: action });
  }

  render() {
    return(
      <View style={ styles.container }>
        <Text style={ styles.title }>Réglages</Text>
        <View style={ styles.radio }>
          <Radio value={ this.state.option } callback={ this._switch_value } 
            radioProps={ [{ label: "Son", value: 0 }, { label: "Vibrations", value: 1 }, { label: "Son + Vibrations", value: 2 }] } />
        </View>
        <Text style={ styles.text }>Le mode avion n'est pas activé</Text>
        <CustomButton title="Retour" callback={ () => this.props.navigation.goBack() } />
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
  title: {
    marginBottom: 30,
    color: "#0e211f",
    fontSize: 40
  },
  radio: {
    backgroundColor: "#f7f6ea",
    padding: 10,
    paddingTop: 20,
    borderRadius: 10
  },
  text: {
    marginTop: 30,
    marginBottom: 20,
    color: "#0e211f",
    textAlign: "center",
    fontSize: 25
  }
});

const mapStateToProps = state => {
  return state.settingsReducer;
};

export default connect(mapStateToProps)(Settings);