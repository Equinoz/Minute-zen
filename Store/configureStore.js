// Configuration du store

import { createStore } from "redux";
import sessionsReducer from "./Reducers/sessionsReducer";

export default createStore(sessionsReducer);