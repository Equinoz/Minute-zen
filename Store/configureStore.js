// Configuration du store

import { createStore, combineReducers } from "redux";
import sessionsReducer from "./Reducers/sessionsReducer";
import settingsReducer from "./Reducers/settingsReducer";

export default createStore(combineReducers({ sessionsReducer, settingsReducer }));