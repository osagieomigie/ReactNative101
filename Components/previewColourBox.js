import React from "react";
import { View, StyleSheet } from "react-native";

function PreviewColourBox({ colourHex }) {
  const boxColour = {
    backgroundColor: colourHex,
  };

  return <View style={[styles.container, boxColour]}></View>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 2,
    width: 25,
    height: 20,
    marginHorizontal: 3,
  },
});
export default PreviewColourBox;
