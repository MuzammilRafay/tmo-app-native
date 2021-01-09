import React from "react";
import { View, StyleSheet, TextInput, Image, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const Search = (props) => {
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
            // onChange={props.onChange}
            onChangeText={(text) => props.onChange(text)}
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
};

const styles = EStyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: "10rem",
    paddingTop: "20rem",
    justifyContent: "flex-start",
    paddingLeft: "15rem",
    marginTop: "10rem",
  },
  searchLeftImage: {
    width: "80rem",
    height: "50rem",
  },
  searchInput: {
    flex: 1,
    flexDirection: "row",
    height: "40rem",
    // borderColor: "gray",
    // borderBottomWidth: 2,
    backgroundColor: "#e5e5e5",
    // borderRadius: "7px",
    // width: 275,
    // width: Dimensions.get("window").width - "80rem",
    // width: Dimensions.get("window").width - 80,
    width: "305rem",
    padding: "10rem",
    fontSize: "16rem",
  },
  ImageStyle: {
    width: "43rem",
    height: "45rem",
    marginRight: "8rem",
    // marginTop: 10,
  },
  ImageStyle2: {
    width: "30rem",
    height: "25rem",
    marginRight: "10rem",
    marginTop: "10rem",
    position: "absolute",
    right: 0,
  },
});

export default Search;
