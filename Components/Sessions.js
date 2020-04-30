import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from "react-native";

const sessions = [
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
    this.navigation = props.navigation;
  }

  _get_available_sessions() {
    let availableSessions = [],
        sumDuration;

    for (session of sessions) {
      sumDuration = 0;
      session.periods.forEach(period => sumDuration += period.duration);
      availableSessions.push({ name: session.name, duration: sumDuration, id: session.id });
    }
    return availableSessions;
  }

  _get_duration(seconds) {
    let minutes = Math.floor(seconds / 60);
    if (minutes < 1)
      return seconds + " s";
    else if (minutes < 60)
      return minutes + " min";
    else
      return Math.floor(minutes / 60) + " h " + ((minutes % 60 != 0) ? minutes % 60 : "") ;
  }

  render() {
    return(
      <View style={ styles.container }>
        <Text style={ styles.label }>Choisissez une séance :</Text>
        <FlatList
          style={ styles.list_sessions }
          data={ this._get_available_sessions() }
          keyExtractor={ (item) => item.id.toString() }
          renderItem={ ({item}) =>
            <TouchableOpacity style={ styles.session }>
              <Text style={ styles.text_session }>{ item.name } - { this._get_duration(item.duration) }</Text>
            </TouchableOpacity>
          }
        />
        <TouchableOpacity style={ styles.add_new_session } onPress={ () => this.navigation.navigate("AddSession") }>
          <Image
            style={ styles.image }
            source={ require("../pictures/add.png") }
          />
          <Text style={ styles.text_new_session }>Créer une séance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.back_button } onPress={ () => this.navigation.goBack() }>
          <Text style={ styles.text_back_button }>Retour</Text>
        </TouchableOpacity>
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
  },
  add_new_session: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  image: {
    height: 30,
    width: 30
  },
  text_new_session: {
    paddingLeft: 10,
    fontSize: 20,
    color: "#0e211f"
  },
  back_button: {
    backgroundColor: "#215771",
    height: 60,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 30,
    elevation: 3
  },
  text_back_button: {
    fontSize: 25
  }
})

export default Sessions;