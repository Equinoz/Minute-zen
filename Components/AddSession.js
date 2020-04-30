import React from "react";
import { View, Text } from "react-native";

class AddSession extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return (
      <View>
        <Text>Création d'une nouvelle séance</Text>
      </View>
    )
  }
};

export default AddSession;