// Reducer gérant les séances

// tableau de séances à supprimer par la suite
const _sessions = [
  {
    id: 0,
    name: "Simple",
    periods: [
      {type: "sit", duration: 600, start: 1, end: 1},
      {type: "interval", duration: 60},
      {type: "stand", duration: 300, start: 1, end: 3}
    ]
  },
  {
    id: 1,
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
    id: 2,
    name: "Courte",
    periods: [
      {type: "sit", duration: 60, start: 1, end: 1}
    ]
  },
  {
    id: 3,
    name: "Longue",
    periods: [
      {type: "sit", duration: 50000, start: 1, end: 1}
    ]
  }
];
  

const initialState = { currentSession: {}, sessions: _sessions, idUpdatingSession: null }; // Pas oublier de reinitialiser en 'sessions: []' !!

function sessionsReducer (state = initialState, action) {
  let nextState;
  switch(action.type) {
    case "SELECT":
      nextState = {
        ...state,
        currentSession: action.value
      };
      return nextState || state;

    case "ADD":
      nextState = {
        ...state,
        sessions: [
          ...state.sessions,
          action.value,
        ]
      };
      return nextState || state;

    case "UPDATE":
      nextState = {
        ...state,
        idUpdatingSession: action.value
      }
      return nextState || state;

    case "DELETE":
      nextState = {
        ...state,
        sessions: state.sessions.filter(item => item.id != action.value)
      }
      return nextState || state;

    default:
      return state;
  }
}

export default sessionsReducer;