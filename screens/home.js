import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import PreviewColourBox from "./../Components/previewColourBox";

// const SOLARIZED = [
//   { colorName: "Base03", hexCode: "#002b36" },
//   { colorName: "Base02", hexCode: "#073642" },
//   { colorName: "Base01", hexCode: "#586e75" },
//   { colorName: "Base00", hexCode: "#657b83" },
//   { colorName: "Base0", hexCode: "#839496" },
//   { colorName: "Base1", hexCode: "#93a1a1" },
//   { colorName: "Base2", hexCode: "#eee8d5" },
//   { colorName: "Base3", hexCode: "#fdf6e3" },
//   { colorName: "Yellow", hexCode: "#b58900" },
//   { colorName: "Orange", hexCode: "#cb4b16" },
//   { colorName: "Red", hexCode: "#dc322f" },
//   { colorName: "Magenta", hexCode: "#d33682" },
//   { colorName: "Violet", hexCode: "#6c71c4" },
//   { colorName: "Blue", hexCode: "#268bd2" },
//   { colorName: "Cyan", hexCode: "#2aa198" },
//   { colorName: "Green", hexCode: "#859900" },
// ];

// const FRONTEND_MASTERS = [
//   { colorName: "Red", hexCode: "#c02d28" },
//   { colorName: "Black", hexCode: "#3e3e3e" },
//   { colorName: "Grey", hexCode: "#8a8a8a" },
//   { colorName: "White", hexCode: "#ffffff" },
//   { colorName: "Orange", hexCode: "#e66225" },
// ];

// const RAINBOW = [
//   { colorName: "Red", hexCode: "#FF0000" },
//   { colorName: "Orange", hexCode: "#FF7F00" },
//   { colorName: "Yellow", hexCode: "#FFFF00" },
//   { colorName: "Green", hexCode: "#00FF00" },
//   { colorName: "Violet", hexCode: "#8B00FF" },
// ];

// const COLOR_PALETTES = [
//   { paletteName: "Solarized", colors: SOLARIZED },
//   { paletteName: "Frontend Masters", colors: FRONTEND_MASTERS },
//   { paletteName: "Rainbow", colors: RAINBOW },
// ];

function Home({ navigation }) {
  const [colourResp, setColourResp] = useState([]);
  const getColours = useCallback(async () => {
    await fetch("https://color-palette-api.kadikraman.now.sh/palettes")
      .then((res) =>
        res.json().then((result) => {
          // console.log(result);
          setColourResp(result);
        })
      )
      .catch((error) => console.log(error));
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
      />
    </View>
    // <View style={styles.container}>
    //   <FlatList
    //     data={COLOR_PALETTES}
    //     keyExtractor={(item) => item.paletteName}
    //     renderItem={({ item }) => (
    //       <TouchableOpacity
    //         onPress={() => {
    //           navigation.navigate("ColourPalette", {
    //             headerName: item.paletteName,
    //             COLORS: item.colors,
    //           });
    //         }}
    //         style={styles.element}
    //       >
    //         <View>
    //           <Text style={styles.textStyle}>{item.paletteName}</Text>
    //         </View>
    //         <View>
    //           <FlatList
    //             data={item.colors.slice(0, 5)}
    //             numColumns={5}
    //             keyExtractor={(item) => item.hexCode}
    //             renderItem={({ item }) => (
    //               <PreviewColourBox colourHex={item.hexCode} />
    //             )}
    //           />
    //         </View>
    //       </TouchableOpacity>
    //     )}
    //   />
    // </View>
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
