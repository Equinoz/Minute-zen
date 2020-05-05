// Vue permettant de créer une nouvelle séance

import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import SetSessionName from "./Components/SetSessionName";
import SetPeriod from "./Components/SetPeriod";

class AddSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newSession: {} };
  }

  // Fonction fléchée pour binder
  _submit_session_name = name => {
    if (name == undefined || name == "")
      this.props.navigation.goBack();
    this.setState({ newSession: { name: name } });
  }

  // Crée une nouvelle séance
  _add_new_session = period => {
    const action = {
      type: "ADD",
      value: {
        id: this.props.sessions.length,
        name: this.state.newSession.name,
        periods: [period]
      }
    }
    this.props.dispatch(action);
  }

  render() {
    return (
      <View style={ styles.container }>
        { this.state.newSession.name == undefined ?
          (<SetSessionName callback={ this._submit_session_name } />) :
          (<SetPeriod name={ this.state.newSession.name } navigation={ this.props.navigation } callback={ this._add_new_session } />)
        }
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