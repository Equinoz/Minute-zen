// Vue "Home"

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { displayDuration } from "./Components/displayDuration";
import { Audio } from "expo-av";
import BlinkingText from "./Components/BlinkingText";

const type = Object.freeze({
  sit: "Assise",
  stand: "Marche",
  interval: "Transition"
});

const mode = Object.freeze({
  STOP: "stop",
  RUN: "run",
  BREAK: "break"
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.countDown;
    this.period = 0;
    this.state = {
      duration: 0,
      mode: mode.STOP,
      blinking: false
    };
  }

  // Joue un son de cloche selon l'option choisie
  async _ring_bell(knocks) {
    const soundObject = new Audio.Sound();
    try {
      if (knocks == 1)
        await soundObject.loadAsync(require("../assets/sounds/one_bell.mp3"));
      else
        await soundObject.loadAsync(require("../assets/sounds/three_bells.mp3"));
      await soundObject.playAsync();
    } catch (err) {
      console.log(err);
    }
  }

  // Lance/relance le compte à rebours
  _run_countDown() {
    this.countDown = setInterval(() => {
      // Fin de la période en cours
      if (this.state.duration == 0) {
        // Si ce n'est pas une période de transition on joue un son de cloche à la fin de la période
        if (this.props.currentSession.periods[this.period].type != "interval")
          this._ring_bell(this.props.currentSession.periods[this.period].end);

        // Mise à jour de la durée
        if (this.props.currentSession.periods.length > this.period + 1) {
          this.period++;
          // Si la période qui démarre n'est pas une période de transiton on joue un son de cloche
          if (this.props.currentSession.periods[this.period].type != "interval")
            this._ring_bell(this.props.currentSession.periods[this.period].start);
          this.setState({ duration: this.props.currentSession.periods[this.period].duration });
        }

        // Fin de la séance
        else
          this._stop_session();
      }
      // Décompte du temps
      else
        this.setState({ duration: this.state.duration - 1 });
    }, 1000);
  }

  // Démarre une séance de zéro
  _start_session() {
    // Son de cloche en début de séance
    this._ring_bell(this.props.currentSession.periods[0].start);
    this.period = 0;
    clearInterval(this.countDown);
    this.setState({
      duration: this.props.currentSession.periods[0].duration,
      mode: mode.RUN
    });
    this._run_countDown();
  }

  // Mets la séance en cours en pause
  _break_session() {
    clearInterval(this.countDown);
    this.setState({ mode: mode.BREAK });
  }

  // Reprends la séance en cours
  _resume_session() {
    this._run_countDown();
    this.setState({ mode: mode.RUN });
  }

  // Stoppe la séance en cours
  _stop_session() {
    clearInterval(this.countDown);
    this.setState({ mode: mode.STOP });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/pictures/bell.png")}
        />
        {(this.props.currentSession.name) && <Text style={styles.title}>{this.props.currentSession.name}</Text>}
        {(this.props.currentSession.periods) && (this.state.mode == mode.STOP) && <Text style={styles.countdown}>{displayDuration(this.props.currentSession.periods[0].duration)}</Text>}
        {(this.state.mode == mode.RUN) && <Text style={styles.countdown}>{displayDuration(this.state.duration)}</Text>}
        {(this.state.mode == mode.BREAK) && <BlinkingText text={displayDuration(this.state.duration)} />}
        {(this.state.mode != mode.STOP) && <Text style={styles.period}>{type[this.props.currentSession.periods[this.period].type]}</Text>}
        <View>
          {(this.props.currentSession.periods) && (this.state.mode == mode.STOP) &&
            <TouchableOpacity style={styles.button} onPress={() => this._start_session()}>
              <Text style={styles.text_button}>Démarrer</Text>
            </TouchableOpacity>
          }
          {(this.state.mode == mode.STOP) &&
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Sessions")}>
              <Text style={styles.text_button}>Choisir une séance</Text>
            </TouchableOpacity>
          }
          {(this.state.mode == mode.RUN) &&
            <TouchableOpacity style={styles.button} onPress={() => this._break_session()}>
              <Text style={styles.text_button}>Pause</Text>
            </TouchableOpacity>
          }
          {(this.state.mode == mode.BREAK) &&
            <TouchableOpacity style={styles.button} onPress={() => this._resume_session()}>
              <Text style={styles.text_button}>Reprendre</Text>
            </TouchableOpacity>
          }
          {(this.state.mode != mode.STOP) &&
            <TouchableOpacity style={styles.button} onPress={() => this._stop_session()}>
              <Text style={styles.text_button}>Réinitialiser</Text>
            </TouchableOpacity>
          }
        </View>
        <TouchableOpacity style={styles.settings} onPress={() => this.props.navigation.navigate("Settings")}>
          <Image
            style={styles.image_settings}
            source={require("../assets/pictures/settings.png")}
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
    marginTop: 10,
    borderRadius: 75
  },
  title: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#305e54",
    fontSize: 30,
    color: "#0e211f"
  },
  countdown: {
    fontSize: 55,
    color: "#0e211f"
  },
  period: {
    fontSize: 30,
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

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Home);