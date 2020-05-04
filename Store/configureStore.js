// Configuration du store

import { createStore } from "redux";
import sessionSelectionReducer from "./Reducers/sessionSelectionReducer";

export default createStore(sessionSelectionReducer);