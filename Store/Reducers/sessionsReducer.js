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
      {type: "interval", duration: 180},
      {type: "sit", duration: 10000, start: 1, end: 3},
      {type: "interval", duration: 300},
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
  

const initialState = { currentSession: {}, sessions: _sessions, updatingSession: {}, periodToUpdate: null }; // Pas oublier de reinitialiser en 'sessions: []' !!

function sessionsReducer(state = initialState, action) {
  let nextState,
      newSession,
      sessions;

  switch(action.type) {
    case "SELECT":
      nextState = {
        ...state,
        currentSession: action.value
      };
      return nextState || state;

    case "ADD":
      newSession = { id: state.sessions.length, ...state.updatingSession };
      nextState = {
        ...state,
        sessions: [
          newSession,
          ...state.sessions
        ]
      };
      return nextState || state;

    case "UPDATE":
      nextState = {
        ...state,
        updatingSession: action.value
      }
      return nextState || state;

    case "VALID_UPDATING":
      sessions = [state.updatingSession, ...state.sessions.filter(session => session.id != state.updatingSession.id)];
      nextState = {
        ...state,
        sessions: sessions,
        updatingSession: {}
      }
      return nextState || state;

    case "DELETE":
      sessions = state.sessions.filter(item => item.id != action.value);
      sessions.forEach((item, index) => item.id = index);
      nextState = {
        ...state,
        sessions: sessions,
        updatingSession: {}
      }
      return nextState || state;

    case "SELECT_PERIOD":
      nextState = {
        ...state,
        periodToUpdate: action.value
      };
      return nextState || state;

    default:
      return state;
  }
}

export default sessionsReducer;