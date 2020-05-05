// Vue "Sessions"

import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import { connect } from "react-redux";
import CustomButton from "./Components/CustomButton";
import AddButton from "./Components/AddButton";

class Sessions extends React.Component {
  constructor(props) {
    super(props);
  }

  // Prend en argument un tableau de periods et renvoie la durée totale des périods en heures et minutes si nécéssaire
  _get_duration(periods) {
    let seconds = periods.map(x => x.duration).reduce((sum, i) => sum + i);

    let minutes = Math.floor(seconds / 60);
    if (minutes < 60)
      return minutes + " min";

    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    if (minutes == 0)
      minutes = "";
    else if (minutes < 10)
      minutes = '0' + minutes;

    return hours + " h " + minutes ;
  }

  // Remplace la séance en cours par la séance choisie
  _select_session (session) {
    const action = { type: "SELECT", value: session};
    this.props.dispatch(action);
    this.props.navigation.goBack();
  }

  render() {
    return(
      <View style={ styles.container }>
        { this.props.sessions.length > 0 && <Text style={ styles.label }>Choisissez une séance :</Text> }
        <FlatList
          style={ styles.list_sessions }
          data={ this.props.sessions }
          keyExtractor={ (item) => item.id.toString() }
          renderItem={ ({item}) =>
            <TouchableOpacity style={ styles.session } onPress={ () => this._select_session(item) }>
              <Text style={ styles.text_session }>{ item.name } - { this._get_duration(item.periods) }</Text>
            </TouchableOpacity>
          }
        />
        <AddButton text="Créer une séance" callback={ () => this.props.navigation.navigate("AddSession") } />
        <CustomButton title="Retour" callback={ () => this.props.navigation.goBack() } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#61867e",
    alignItems: "center"
  },
  label: {
    fontSize: 22,
    color: "#0e211f"
  },
  list_sessions: {
    flexGrow: 0,
    marginTop: 20
  },
  session: {
    backgroundColor: "#286886",
    height: 50,
    width: 280,
    justifyContent: "center",
    marginTop: 10,
    paddingLeft: 25,
    marginBottom: 10,
    borderRadius: 25,
    elevation: 3
  },
  text_session: {
    fontSize: 25,
    color: "#0e211f"
  }
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Sessions);