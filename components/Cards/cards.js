import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";

const Cards = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <View style={styles.cardBodyColor}></View>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 14,
    justifyContent: "flex-start",
  },
  cardContainerTwo: {},
  cardBodyColor:{
    height:'120px',
    width:'180px',
    backgroundColor:'#c4c4c4',
    borderRadius:20
  },
  titleText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "700",
    width:200
  },
});

export default Cards;
