import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Here are some boxes of different colours
        </Text>
        <Text style={styles.firstBox}>Cyan #2aa198</Text>
        <Text style={styles.secondBox}>Blue #268bd2</Text>
        <Text style={styles.thirdBox}>Magenta #d33682</Text>
        <Text style={styles.fourthBox}>Orange #cb4b16</Text>
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
  firstBox: {
    display: "flex",
    backgroundColor: "#2aa198",
    justifyContent: "center",
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 3,
    color: "white",
  },
  secondBox: {
    display: "flex",
    justifyContent: "center",
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 3,
    backgroundColor: "#268bd2",
    color: "white",
  },
  thirdBox: {
    display: "flex",
    justifyContent: "center",
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 3,
    backgroundColor: "#d33682",
    color: "white",
  },
  fourthBox: {
    display: "flex",
    justifyContent: "center",
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 3,
    backgroundColor: "#cb4b16",
    color: "white",
  },
  safeArea: {
    flex: 1,
  },
});

export default App;
