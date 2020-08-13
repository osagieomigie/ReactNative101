import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Home({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ColourPalette");
      }}
    >
      <View>
        <Text>Hello world</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Home;
