import React from "react";
import { View, StyleSheet, Image, Text, FlatList } from "react-native";
// import Carousel from "./Carousel/index";

export default function Categories(props) {
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.categoryContainer}
        data={props.data}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{
                uri: `https://techmyorder.com/tmo_api/storage/${item.image}`,
              }}
              style={styles.categoryImg}
            />
            <Text style={styles.CategoryText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    // backgroundColor: "blue",
  },
  categoryContainerItem: {
    // flex: 1,
    // flexDirection: "row",
    // justifyContent: "flex-start",
  },
  imageContainer: {},
  categoryImg: {
    width: 85,
    height: 65,
    marginLeft: 12,
    marginRight: 6,
    marginTop: 20,
    borderRadius: 10,
  },
  CategoryText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "700",
  },
});
