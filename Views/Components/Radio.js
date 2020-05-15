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
};

Radio.propTypes = {
  value: PropTypes.oneOf([0, 1]).isRequired,
  callback: PropTypes.func.isRequired,
  radioProps: PropTypes.arrayOf(
    PropTypes.shape({
      label:PropTypes.string.isRequired,
      value:PropTypes.oneOf([0, 1]).isRequired
    }).isRequired
  ).isRequired
};

export default Radio;