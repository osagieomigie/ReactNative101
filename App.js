import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Here are some boxes of different colours
        </Text>
        <Text style={[styles.firstBox, styles.Box]}>Cyan #2aa198</Text>
        <Text style={[styles.secondBox, styles.Box]}>Blue #268bd2</Text>
        <Text style={[styles.thirdBox, styles.Box]}>Magenta #d33682</Text>
        <Text style={[styles.fourthBox, styles.Box]}>Orange #cb4b16</Text>
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
  Box: {
    display: "flex",
    justifyContent: "center",
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 3,
    color: "white",
  },
  firstBox: {
    backgroundColor: "#2aa198",
  },
  secondBox: {
    backgroundColor: "#268bd2",
  },
  thirdBox: {
    backgroundColor: "#d33682",
  },
  fourthBox: {
    backgroundColor: "#cb4b16",
  },
  safeArea: {
    flex: 1,
  },
});

export default App;
