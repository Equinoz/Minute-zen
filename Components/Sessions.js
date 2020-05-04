// Vue "Sessions"

import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import { connect } from "react-redux";
import BackButton from "./BackButton";
import AddButton from "./AddButton";

// tableau de séances à supprimer par la suite
const _sessions = [
  {
    id: 1,
    name: "Simple",
    periods: [
      {type: "sit", duration: 600, start: 1, end: 1},
      {type: "interval", duration: 30},
      {type: "stand", duration: 300, start: 1, end: 3}
    ]
  },
  {
    id: 2,
    name: "Complète",
    periods: [
      {type: "sit", duration: 1000, start: 3, end: 1},
      {type: "interval", duration: 60},
      {type: "sit", duration: 500, start: 1, end: 1},
      {type: "interval", duration: 60},
      {type: "sit", duration: 100, start: 1, end: 3},
      {type: "sit", duration: 1000, start: 3, end: 1},
      {type: "interval", duration: 60},
      {type: "sit", duration: 500, start: 1, end: 1},
      {type: "interval", duration: 60},
      {type: "sit", duration: 260, start: 1, end: 3}
    ]
  },
  {
    id: 3,
    name: "Courte",
    periods: [
      {type: "sit", duration: 30, start: 1, end: 1}
    ]
  },
  {
    id: 4,
    name: "Longue",
    periods: [
      {type: "sit", duration: 50000, start: 1, end: 1}
    ]
  }
];

class Sessions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sessions: _sessions };
    this.navigation = props.navigation;
  }

  // Prend en argument un tableau de periods et renvoie la durée totale des périods en heures et minutes si nécéssaire
  _get_duration(periods) {
    let seconds = periods.map(x => x.duration).reduce((sum, i) => sum + i);

    let minutes = Math.floor(seconds / 60);
    if (minutes < 1)
      return seconds + " s";
    else if (minutes < 60)
      return minutes + " min";
    else
      return Math.floor(minutes / 60) + " h " + ((minutes % 60 != 0) ? minutes % 60 : "") ;
  }

  // Remplace la séance en cours par la séance choisie
  _select_session (session) {
    const action = { type: "UPDATE", value: session};
    this.props.dispatch(action);
    this.navigation.goBack();
  }

  render() {
    return(
      <View style={ styles.container }>
        <Text style={ styles.label }>Choisissez une séance :</Text>
        <FlatList
          style={ styles.list_sessions }
          data={ this.state.sessions }
          keyExtractor={ (item) => item.id.toString() }
          renderItem={ ({item}) =>
            <TouchableOpacity style={ styles.session } onPress={ () => this._select_session(item) }>
              <Text style={ styles.text_session }>{ item.name } - { this._get_duration(item.periods) }</Text>
            </TouchableOpacity>
          }
        />
        <AddButton text="Créer une séance" callback={ () => this.navigation.navigate("AddSession") } />
        <BackButton navigation={ this.navigation } />
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