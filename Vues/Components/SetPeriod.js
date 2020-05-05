// Component permettant de créer/modifier les caractéristiques d'une période

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Radio from "./Radio";
import CustomButton from "./CustomButton";
import TimePicker from "./TimePicker";
import PropTypes from "prop-types";

class SetPeriod extends React.Component {
  constructor(props) {
    super(props);
    this.state = { duration: 0, type: 0, start: 0, end: 0 };
  }

  _valid_period() {
    if (this.state.duration > 0)
      this.props.callback({
        type: (this.state.type) ? "stand" : "sit",
        duration: this.state.duration,
        start: (this.state.start) ? 3 : 1,
        end: (this.state.end) ? 3 : 1
      });
    this.props.navigation.goBack();
  }

  render() {
    return(
      <View style={ styles.container }>
        <Text style={ styles.title }>Séance: { this.props.name }</Text>
        <View style={ styles.form }>
          <Text style={ styles.label }>Durée de la période:</Text>
          <TimePicker duration={ this.state.duration } callback={duration => this.setState({ duration: duration })} />
          <Text style={ styles.label }>Type de méditation:</Text>
          <Radio value={ this.state.type }
            callback={ (value => this.setState({ type: value })) }
            radioProps={[ { label: "Assis", value: 0 }, { label: "Debout", value: 1 } ]} />
          <Text style={ styles.label }>Coups de cloches au début:</Text>
          <Radio value={ this.state.start }
            callback={ (value => this.setState({ start: value })) }
            radioProps={[ { label: "Un", value: 0 }, { label: "Trois", value: 1 } ]} />
          <Text style={ styles.label }>Coups de cloches à la fin:</Text>
          <Radio value={ this.state.end }
            callback={ (value => this.setState({ end: value })) }
            radioProps={[ { label: "Un", value: 0 }, { label: "Trois", value: 1 } ]} />
        </View>
        <View style={ styles.buttons } >
          <CustomButton title="Retour" callback={ () => this.props.navigation.goBack() } />
          <CustomButton title="Valider" callback={ () => this._valid_period() } />
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  title: {
    marginTop: 10,
    fontSize: 25,
    color: "#0e211f"
  },
  form: {
    backgroundColor: "#f7f6ea",
    width: 260,
    marginTop: 15,
    padding: 7,
    borderRadius: 5
  },
  label: {
    margin: 5,
    fontSize: 18,
    color: "#0e211f"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 280
  }
});

SetPeriod.propTypes = {
  name: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired
}

export default SetPeriod;