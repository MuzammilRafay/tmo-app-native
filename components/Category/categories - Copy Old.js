import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default function Categories() {
  return (
    <View style={styles.categoryContainer}>
      <View
        style={{
          //   borderBottomWidth: 1,
          //   borderColor: "#cf1e4c",
          paddingBottom: 10,
        }}
      >
        <Image
          source={require(".././assets/resources2/photoshop/image1.png")}
          style={styles.categoryImg}
        />
        <Text style={styles.CategoryText}>Burgers</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require(".././assets/resources2/photoshop/image2.png")}
          style={styles.categoryImg}
        />
        <Text style={styles.CategoryText}>Burgers</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require(".././assets/resources2/photoshop/image3.png")}
          style={styles.categoryImg}
        />
        <Text style={styles.CategoryText}>Burgers</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require(".././assets/resources2/photoshop/image4.png")}
          style={styles.categoryImg}
        />
        <Text style={styles.CategoryText}>Burgers</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require(".././assets/resources2/photoshop/image1.png")}
          style={styles.categoryImg}
        />
        <Text style={styles.CategoryText}>Burgers</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require(".././assets/resources2/photoshop/image2.png")}
          style={styles.categoryImg}
        />
        <Text style={styles.CategoryText}>Burgers</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    // marginTop: 15,
  },
  imageContainer: {},
  categoryImg: {
    width: 85,
    height: 65,
    // marginHorizontal: 8,
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
