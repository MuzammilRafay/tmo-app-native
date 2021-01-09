import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import Carousel from "./Carousel/index";
import EStyleSheet from "react-native-extended-stylesheet";

export default function Categories(props) {
  return (
    <View>
      <ScrollView horizontal style={styles.scrollViewStyle}>
        <FlatList
          contentContainerStyle={styles.categoryContainer}
          data={props.data}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => props.onCategoryClick(item)}
            >
              <View>
                <Image
                  source={{
                    uri: `https://techmyorder.com/tmo_api/storage/${item.image}`,
                  }}
                  style={styles.categoryImg}
                />
                <Text style={styles.CategoryText}>{item.name}</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
}

const styles = EStyleSheet.create({
  scrollViewStyle: {
    paddingBottom: "15rem",
  },
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
    width: "70rem",
    height: "65rem",
    marginLeft: "12rem",
    marginRight: "6rem",
    marginTop: "20rem",
    borderRadius: "10rem",
  },
  CategoryText: {
    color: "black",
    fontSize: "16rem",
    textAlign: "center",
    fontWeight: "700",
  },
});
