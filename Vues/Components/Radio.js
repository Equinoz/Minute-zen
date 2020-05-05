// Component gérant les boutons radio

import React from "react";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from "react-native-simple-radio-button";
import PropTypes from "prop-types";

class Radio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <RadioForm formHorizontal={true}>
        {
          this.props.radioProps.map((obj, i) => (
            <RadioButton labelHorizontal={true} key={i} >
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={this.props.value === i}
                onPress={(value) => {this.props.callback(value)}}
                borderWidth={1}
                buttonInnerColor={"#215771"}
                buttonOuterColor={"#215771"}
                buttonSize={10}
                buttonOuterSize={18}
                buttonWrapStyle={{marginLeft: 8}}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelHorizontal={true}
                onPress={(value) => {this.props.callback(value)}}
                labelStyle={{fontSize: 18, color: "#0e211f"}}
              />
            </RadioButton>
          ))
        }
      </RadioForm>
    )
  }
}

function display_propTypes_error(propName, componentName) {
  return new Error(
    "Invalid prop `" + propName + "` supplied to `" + componentName + "`. Validation failed."
  );
}

Radio.propTypes = {
  value: PropTypes.oneOf([0, 1]),
  callback: PropTypes.func.isRequired,
  radioProps: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (typeof propValue[key].label.valueOf() != "string" || propValue[key].label == "" || ![0, 1].includes(propValue[key].value))
      return display_propTypes_error(propFullName, componentName);
  })
}

export default Radio;