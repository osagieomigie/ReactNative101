import React from "react";
import { Text, StyleSheet } from "react-native";

function ColourBox({ colourName, colourHex }) {
  const boxColour = {
    backgroundColor: colourHex,
  };
  return (
    <Text style={[styles.Box, boxColour]}>
      {colourName} {colourHex}
    </Text>
  );
}

const styles = StyleSheet.create({
  Box: {
    display: "flex",
    justifyContent: "center",
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 3,
    color: "white",
  },
});

export default ColourBox;
