import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import PreviewColourBox from "./../Components/previewColourBox";

function Home({ navigation }) {
  const [colourResp, setColourResp] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const getColours = useCallback(async () => {
    await fetch("https://color-palette-api.kadikraman.now.sh/palettes")
      .then((res) =>
        res.json().then((result) => {
          if (res.status === 200) {
            // update state is http status is 200 - ok
            setColourResp(result);
          }
        })
      )
      .catch((error) => console.log(error));
  });

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetch("https://color-palette-api.kadikraman.now.sh/palettes")
      .then((res) =>
        res.json().then((result) => {
          if (res.status === 200) {
            setColourResp(result);
          }
        })
      )
      .catch((error) => console.log(error));
    setIsRefreshing(false);
  });

  useEffect(() => {
    getColours();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={colourResp}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ColourPalette", {
                headerName: item.paletteName,
                COLORS: item.colors,
              });
            }}
            style={styles.element}
          >
            <View>
              <Text style={styles.textStyle}>{item.paletteName}</Text>
            </View>
            <View>
              <FlatList
                data={item.colors.slice(0, 5)}
                numColumns={5}
                keyExtractor={(item) => item.hexCode}
                renderItem={({ item }) => (
                  <PreviewColourBox colourHex={item.hexCode} />
                )}
              />
            </View>
          </TouchableOpacity>
        )}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ColourPaletteModal");
            }}
          >
            <Text>Launch Modal</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  element: {
    paddingVertical: 10,
  },
  textStyle: {
    fontWeight: "bold",
  },
});

export default Home;
