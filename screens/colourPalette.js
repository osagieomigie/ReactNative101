import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import ColourBox from "./../Components/colourBox";

function ColourPalette({ route }) {
  const { COLORS } = route.params;
  const { headerName } = route.params;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>{headerName}</Text>
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
