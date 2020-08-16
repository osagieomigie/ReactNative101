import React from "react";
import Home from "./screens/home";
import ColourPalette from "./screens/colourPalette";
import ColourPaletteModal from "./screens/colourPalettemodal";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColourPalette"
        component={ColourPalette}
        options={({ route }) => ({ title: route.params.headerName })}
      />
    </MainStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColourPaletteModal"
          component={ColourPaletteModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
