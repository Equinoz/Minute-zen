import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Components/Home";
import Settings from "../Components/Settings";
import Sessions from "../Components/Sessions";
import AddSession from "../Components/AddSession";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ title: null, headerLeft: null , headerStyle: { height: 40, elevation: 0, backgroundColor: "#61867e" } }}>
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="Settings" component={ Settings } />
        <Stack.Screen name="Sessions" component={ Sessions } />
        <Stack.Screen name="AddSession" component={ AddSession } />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigator;