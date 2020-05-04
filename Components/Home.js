// Vue "Home"

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  // Fonction temporaire
  _display_session() {
    console.log(this.props.currentSession);
  }

  render() {
    return(
      <View style={ styles.container }>
        <Image
          style={ styles.image }
          source={ require("../pictures/bell.png") }
        />
        <Text style={ styles.countdown }>17 : 36</Text>
        <View>
          <TouchableOpacity onPress={ () => this._display_session() }>
            <View style={ styles.button }>
              <Text style={ styles.text_button }>Mettre en pause</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={ styles.button }>
              <Text style={ styles.text_button }>Arrêter</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigation.navigate("Sessions")}>
            <View style={ styles.button }>
              <Text style={ styles.text_button }>Choisir une séance</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={ styles.settings } onPress={() => this.navigation.navigate("Settings")}>
          <Image
            style={ styles.image_settings }
            source={ require("../pictures/settings.png") }
          />
        </TouchableOpacity>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#61867e",
    justifyContent: "space-around",
    alignItems: "center"
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 20,
    borderRadius: 75
  },
  countdown: {
    fontSize: 70,
    color: "#0e211f"
  },
  button: {
    backgroundColor: "#215771",
    height: 60,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 30,
    elevation: 3
  },
  text_button: {
    fontSize: 19,
    color: "#0e211f"
  },
  settings: {
    alignSelf: "flex-end",
    marginRight: 10,
    marginBottom: 10
  },
  image_settings: {
    height: 50,
    width: 50
  }
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Home);