import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }
  render() {
    return(
      <View style={ styles.container }>
        <Text style={ styles.text }>Options "Do not disturb"</Text>
        <Text style={ styles.text }>Option Vibration + Son</Text>
        <Text style={ styles.text }>Option Vibration seule</Text>
        <Text style={ styles.text }>Option Son seul</Text>
        <Button title="Retour" onPress={() => this.navigation.goBack()}/>
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
  text: {
    fontSize: 30
  }
});

export default Settings;