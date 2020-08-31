import React from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";

export default function Search(props) {
  return (
    <View>
      <View></View>
      <View style={styles.searchContainer}>
        <View>
          <Image
            source={require("../.././assets/resources2/photoshop/loaction.png")}
            style={styles.ImageStyle}
          />
        </View>

        <View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Restaurant"
            defaultValue=""
            inlineImageLeft="logo"
            onChange={props.onChange}
          />
        </View>
        <View>
          <Image
            source={require("../.././assets/resources2/photoshop/search-icon.png")}
            style={styles.ImageStyle2}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 20,
    justifyContent: "flex-start",
    paddingLeft: 25,
    marginTop: 10,
  },
  searchLeftImage: {
    width: 80,
    height: 50,
  },
  searchInput: {
    flex: 1,
    flexDirection: "row",
    height: 40,
    // borderColor: "gray",
    // borderBottomWidth: 2,
    backgroundColor: "#e5e5e5",
    borderRadius: "7px",
    width: 250,
    padding: 10,
  },
  ImageStyle: {
    width: 48,
    height: 35,
    marginRight: 10,
    marginTop: 10,
  },
  ImageStyle2: {
    width: 30,
    height: 25,
    marginRight: 10,
    marginTop: 15,
  },
});
