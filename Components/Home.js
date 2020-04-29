import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
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
          <TouchableOpacity>
            <View style={ styles.button }>
              <Text style={ styles.text_button }>Mettre en pause</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={ styles.button }>
              <Text style={ styles.text_button }>Arrêter</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={ styles.button }>
              <Text style={ styles.text_button }>Choisir une scéance</Text>
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
    elevation: 3,
    borderRadius: 30
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

export default Home;