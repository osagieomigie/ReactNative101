import React from "react";
import Home from "./screens/home";
import ColourPalette from "./screens/colourPalette";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColourPalette" component={ColourPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
