import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from "react-native-splash-screen";
import Navigator from "./Navigation/Navigator";
import { Provider } from "react-redux";
import Store from "./Store/configureStore";

export default function App() {
	useEffect(() => {
		SplashScreen.hide();
	}, []);
  return (
    <Provider store={ Store } >
      <Navigator />
    </Provider>
  );
};
