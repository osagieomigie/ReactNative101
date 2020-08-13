import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import ColourBox from "./../Components/colourBox";

const COLORS = [
  { colorName: "Base03", hexCode: "#002b36" },
  { colorName: "Base02", hexCode: "#073642" },
  { colorName: "Base01", hexCode: "#586e75" },
  { colorName: "Base00", hexCode: "#657b83" },
  { colorName: "Base0", hexCode: "#839496" },
  { colorName: "Base1", hexCode: "#93a1a1" },
  { colorName: "Base2", hexCode: "#eee8d5" },
  { colorName: "Base3", hexCode: "#fdf6e3" },
  { colorName: "Yellow", hexCode: "#b58900" },
  { colorName: "Orange", hexCode: "#cb4b16" },
  { colorName: "Red", hexCode: "#dc322f" },
  { colorName: "Magenta", hexCode: "#d33682" },
  { colorName: "Violet", hexCode: "#6c71c4" },
  { colorName: "Blue", hexCode: "#268bd2" },
  { colorName: "Cyan", hexCode: "#2aa198" },
  { colorName: "Green", hexCode: "#859900" },
];

function ColourPalette() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Here are some boxes of different colours
        </Text>
        <FlatList
          data={COLORS}
          keyExtractor={(item) => item.hexCode}
          renderItem={({ item }) => (
            <ColourBox colourName={item.colorName} colourHex={item.hexCode} />
          )}
        />
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
    marginHorizontal: 10,
  },
  safeArea: {
    flex: 1,
  },
});

export default ColourPalette;
