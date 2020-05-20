import 'react-native-gesture-handler';
import React from 'react';
import Navigator from "./Navigation/Navigator";
import { Provider } from "react-redux";
import Store from "./Store/configureStore";

export default function App() {
  return (
    <Provider store={ Store } >
      <Navigator />
    </Provider>
  );
};
