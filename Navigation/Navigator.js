// Navigation

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Vues/Home";
import Settings from "../Vues/Settings";
import Sessions from "../Vues/Sessions";
import AddSession from "../Vues/AddSession";
import SetSession from "../Vues/SetSession";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ title: null, headerLeft: null , headerStyle: { height: 40, elevation: 0, backgroundColor: "#61867e" } }}>
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="Settings" component={ Settings } />
        <Stack.Screen name="Sessions" component={ Sessions } />
        <Stack.Screen name="AddSession" component={ AddSession } />
        <Stack.Screen name="SetSession" component={ SetSession } />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigator;