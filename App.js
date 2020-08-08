import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ColourBox from "./Components/colourBox";

function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Here are some boxes of different colours
        </Text>
        <ColourBox colourName={"Cyan"} colourHex={"#2aa198"} />
        <ColourBox colourName={"Blue"} colourHex={"#268bd2"} />
        <ColourBox colourName={"Magenta"} colourHex={"#d33682"} />
        <ColourBox colourName={"Orange"} colourHex={"#cb4b16"} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  safeArea: {
    flex: 1,
  },
});

export default App;
