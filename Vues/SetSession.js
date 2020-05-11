import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, FlatList, Alert } from "react-native";
import { connect } from "react-redux";
import CustomButton from "./Components/CustomButton";
import { displayDuration } from "./Components/displayDuration";
import AddButton from "./Components/AddButton";

class SetSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToUpdate: this.props.sessions.find(session => session.id == this.props.idUpdatingSession)
    };
  }

  delete_session({ id, name }) {
    Alert.alert(
      "Suppression de " + name,
      "Etes-vous sûr de vouloir supprimer cette séance ?",
      [
        {text: "Oui", onPress: () => {
          const action = { type: "DELETE", value: id };
          this.props.dispatch(action);
          this.props.navigation.goBack();
        }},
        {text: "Annuler", style: "cancel"},
      ],
      { cancelable: false }
    );
  }

  render() {
    return(
      <View style={ styles.container }>
        <TouchableOpacity onPress={ () => console.log(this.state.sessionToUpdate) }>
          <Text style={ styles.label }>Modifications: { this.state.sessionToUpdate.name }</Text>
        </TouchableOpacity>
        <FlatList
          style={ styles.list_periods }
          data={ this.state.sessionToUpdate.periods }
          keyExtractor={ (item) => this.state.sessionToUpdate.periods.indexOf(item).toString() }
          renderItem={ ({item}) => 
            <TouchableOpacity style={ styles.period } onLongPress={ () => console.log("modif") }>
              <Text style={ styles.text_period}>
                Type: { item.type == "sit" && "assise" }
                { item.type == "stand" && "marchée" }
                { item.type == "interval" && "transition" }{"\n"}
                Durée: { displayDuration(item.duration, true) }</Text>
              { item.type != "interval" && <Text style={ styles.text_period}>
                Début: { (item.start == 1) ? "1 coup" : "3 coups" } de cloche{"\n"}
                Fin: { (item.end == 1) ? "1 coup" : "3 coups" } de cloche</Text> }
            </TouchableOpacity>
          }
        />
        <AddButton text="Ajouter une période" callback={ () => console.log("callback") }/>
        <CustomButton style={ styles.delete_button } title="Supprimer la séance"
          callback={ () => this.delete_session(this.state.sessionToUpdate) } />
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
  list_periods: {
    flexGrow: 0,
    marginTop: 20
  },
  period: {
    backgroundColor: "#f7f6ea",
    width: 230,
    margin: 10,
    padding: 5,
    borderColor: "#344642",
    borderWidth: 1,
    borderRadius: 5
  },
  text_period: {
    fontSize: 18
  },
  delete_button: {
    backgroundColor: "#c92836",
    height: 45,
    width: 260,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 23,
    elevation: 3
  }
})

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(SetSession);