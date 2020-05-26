// Reducer gérant les options

const initialState = { option: "sound" };

function settingsReducer(state = initialState, action) {
  let nextState;
  switch(action.type) {
    case "UPDATE":
      if (~["sound", "vibration", "both"].indexOf(action.value))
        nextState = { option: action.value };
      return nextState || state;
    default:
      return state;
  }
}

export default settingsReducer;