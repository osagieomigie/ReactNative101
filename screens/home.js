import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import PreviewColourBox from "./../Components/previewColourBox";

function Home({ navigation, route }) {
  const [colourResp, setColourResp] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [addColours, setAddColours] = useState([]);
  const newColour = route.params ? route.params.newColour : undefined; // when there arent any new colours
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
            // console.log(addColours);
            setColourResp([...addColours, ...result]); // add
          }
        })
      )
      .catch((error) => console.log(error));
    setIsRefreshing(false);
  });

  useEffect(() => {
    getColours();
  }, []);

  useEffect(() => {
    if (newColour) {
      setAddColours((colour) => [...colour, newColour]);
      //addColours.push(newColour);
      setColourResp((result) => [newColour, ...result]);
    }
  }, [newColour]);
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
            <Text style={styles.modal}>Add a colour scheme</Text>
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
  modal: {
    marginVertical: 5,
    color: "blue",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Home;
